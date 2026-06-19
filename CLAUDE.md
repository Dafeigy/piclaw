# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and test commands

All commands run from the **repo root** unless `cd runtime` is explicit.

```bash
# Type-check
bun run typecheck

# Lint
bun run lint

# Run all tests (in-memory SQLite, sequential — required)
bun run test:raw
# or equivalently:
cd runtime && PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1

# Run a single test file (from repo root)
cd runtime && PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/path/to/file.test.ts

# Run a single test with pattern match
cd runtime && PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 -t "pattern"

# Run the controlled test runner (splits work across CPUs, runs ci:fast:tests)
bun run test

# Fast CI guardrails (silent-swallow check + structured-logging check + dep pins +
# core tests + feature tests + web build)
bun run ci:fast
# or via Make:
make ci-fast

# Full quality gate (lint + typecheck + test + all static analysis checks)
bun run quality

# Build web frontend bundles (vendor + app + editor + login + CSS + sourcemaps)
bun run build:web
# or:
make build-web

# Full build (vendor bundles + web + TypeScript emit)
make build-piclaw

# Run with watch mode for development (hot-reload on file changes)
bun run dev

# Build Docker image and start container
make build && make up

# Run feature tests alone (BDD-style, under runtime/test/features/)
bun run ci:fast:features
```

### Static analysis checks (run individually)

```bash
bun run check:pack-hygiene        # verify npm pack file list
bun run check:stale-dist          # detect stale generated/dist
bun run check:import-boundaries   # enforce module import rules
bun run check:unused-exports      # ts-prune dead export detection
bun run check:hook-tdz            # hook temporal-dead-zone safety
bun run check:silent-swallows     # detect suppressed errors in source
bun run check:structured-logging  # enforce structured logging scopes
bun run check:dependency-pins     # enforce exact-version pin policy
```

### Integration and E2E tests

```bash
# Full integration gate (lint + all tests + static analysis + build + Playwright)
bun run ci:integration

# Optional browser-isolation tests
PICLAW_RUN_OPTIONAL_BROWSER_TESTS=1 bun run test:optional:browser-isolation

# OOBE / E2E Playwright tests
bun run test:oobe:local-container
bun run test:e2e:terminal-reopen
bun run test:e2e:markdown-live-preview
bun run test:e2e:markdown-editor-speed
```

## Git workflow

- **Always use pull requests** — never commit directly to `main`. Create a feature branch, push, open a PR via `gh pr create`. Merge with `gh pr merge --merge --delete-branch`.
- Use `git worktree add` for parallel work. Prune stale worktrees after merges (`git worktree prune`).
- Two-phase release: push `vX.Y.Z-ux` prerelease tag first (triggers E2E/UX tests only), then push `vX.Y.Z` final tag (triggers CI + Docker publish) only after UX passes.
- See `AGENTS.md` for the full release process.

## Repo architecture

PiClaw is a self-hosted AI agent workspace with a streaming web UI, built on the [Pi Coding Agent SDK](https://github.com/badlogic/pi-mono) (`@earendil-works/pi-agent-core` + `@earendil-works/pi-coding-agent`).

**Runtime stack**: TypeScript → run directly by Bun (no compilation step needed). Everything lives under `runtime/`. The repo-root `package.json` is the single source of truth for dependencies and scripts; there is no separate `runtime/package.json`.

### Entry point and startup

- `runtime/src/index.ts` — process entry point (also `package.json` `main`/`bin`)
- `runtime/src/runtime.ts` — service startup orchestration (wires DB, worker pool, channels)
- `runtime/src/runtime/` — message loop, worker pool wiring, startup helpers
- `runtime/src/core/` — config, chat context, and other cross-cutting utilities

### Core request flow

```
Channel (web/WhatsApp) → Router → AgentQueue → AgentPool → Pi SDK AgentSession
```

- **Channels** (`runtime/src/channels/web/`): accept user input and deliver output. Web is the primary channel; WhatsApp is optional/opt-in.
- **Router** (`runtime/src/router.ts`): dispatches messages to the right queue lane. Channel detectors are extensible via `registerChannelDetector()`.
- **AgentQueue** (`runtime/src/queue.ts`): per-lane serialization (`chat:{jid}` and `dream:{jid}` lanes). Includes retry with exponential backoff and optional deduplication by ID.
- **AgentPool** (`runtime/src/agent-pool.ts` and `runtime/src/agent-pool/`): keeps one warm `AgentSession` per chat JID with idle eviction TTL. Manages session lifecycle, compaction, recovery, slash commands, side prompts, and agent-control command dispatch.
- **Agent control** (`runtime/src/agent-control/`): command parser, handler registry, provider definitions. Slash commands (`/model`, `/compact`, etc.) are parsed here and dispatched to handlers under `agent-control/handlers/`.
- **Pi SDK**: handles the actual model interaction. Extension factories and tools register on the Pi session object.

### Extension system — two layers

1. **Inline extension factories** (`runtime/src/extensions/`): compiled into the package. Registered via `extensionFactories` on the resource loader. These are the "always-available" tools (file attachments, model control, workspace search, scheduled tasks, smart compaction, SSH core tools, image processing, etc.).

2. **Packaged runtime extensions** (`runtime/extensions/`): filesystem-backed, loaded via jiti at session start. Grouped under `browser/`, `viewers/`, `integrations/`, `experimental/`, `platform/`.

Both layers register tools via `pi.registerTool()` and commands via `pi.registerCommand()`.

Do not confuse `runtime/extensions/` with workspace-local `.pi/extensions/` — they are different surfaces.

### Addon system

`runtime/src/addons/` — runtime contribution hooks for packaged addons. Addons register config API handlers via `__piclaw_registerAddonConfigApi` (preferred for new settings-pane work) rather than routing browser settings traffic through slash commands.

### Web frontend

- Built with Preact + htm, bundled with `bun build` (esbuild) into `runtime/web/static/`.
- Entry: `runtime/web/src/app.ts`. Editor is a separate lazy-loaded bundle (`editor.bundle.js`).
- Pane extension system for tab/dock components: `runtime/web/src/panes/`.
- Vendored libraries (marked, katex, mermaid, codemirror, preact-htm) are pre-bundled separately under `runtime/web/static/common/`. Each has a companion `.meta.json` for version tracking.
- Web build is gated by post-build tests (`test/channels/web/web-build.test.ts`). Set `WEB_BUILD_TEST_TIMEOUT_MS` env var to adjust timeout (default 20000ms).
- Auth gate: `request-router-service.ts` auth-gates `app.bundle.js` and only allows `login.bundle.js` pre-auth.

### State and storage

- **SQLite** at `/workspace/.piclaw/store/messages.db` — messages, chats, tasks, token usage, keychain, sessions, workspace FTS, media, web sessions, remote interop, chat branches/cursors. Schema across individual files in `runtime/src/db/` (one file per concern).
- **Session trees**: `pi` JSONL session history under `/workspace/.piclaw/data/sessions/`.
- **Workspace**: `/workspace` — notes, files, skills (`/workspace/.pi/skills/`), memory (`/workspace/notes/memory/MEMORY.md`).

### Background workers

- **Dream/AutoDream** (`runtime/src/dream.ts`): out-of-band model turns on `dream:{jid}` lanes for memory consolidation.
- **Task scheduler** (`runtime/src/task-scheduler.ts`): cron/interval scheduled tasks, isolated via session tree navigation.
- **IPC** (`runtime/src/ipc.ts`): file-system-based IPC for cross-component communication and scheduled task enqueuing.

### Code organization conventions

- Test files mirror source structure: `runtime/test/<module>/` ↔ `runtime/src/<module>/`
- Test helpers live in `runtime/test/helpers.ts` (temp workspace creation, env var overrides)
- Each DB concern gets its own file under `runtime/src/db/` (e.g., `messages.ts`, `tasks.ts`, `media.ts`)
- Extension contributions (skills) colocated with the extension when tightly coupled
- Repo dev scripts route through `runtime/scripts/repo-dev-command.ts` — the central dispatcher for `bun run lint`, `bun run typecheck`, etc.

### Key conventions

- Tests always run with `PICLAW_DB_IN_MEMORY=1` and `--max-concurrency=1` for SQLite safety.
- Stateful backend truth lives in SQLite. Browser-local state (e.g. UI dismissal/seen flags) stays in the client.
- SSH-backed core tools are session-scoped and persisted in SQLite `ssh_configs`; they clear at turn end.
- New HTTP endpoints follow a strict chain: `dispatch-agent.ts` → `channel-endpoint-facade-service.ts` → `web-channel-http-surface-service.ts` → `web-channel-contracts.ts` → `web-channel-prototype.ts`.
- Agent-driven reloads: run `make local-install`, send final reply, then call `exit_process` as the last action.
- Docker container uses Supervisor for restarts; host-native installs use `systemctl --user`.
- Default git pull policy: merge, never rebase (`git config --global pull.rebase false`).
- Dependencies use pinned exact versions only (no `^`/`~` ranges). Enforced by `check:dependency-pins`.
- Structured logging via `createLogger("module-name")` from `runtime/src/utils/logger.ts`. Honours `PICLAW_LOG_LEVEL` / `LOG_LEVEL` threshold. Sinks receive newline-delimited JSON records.

### Skel and new installs

`skel/` contains the workspace skeleton copied to new installs — including `.pi/skills/`, `.piclaw/`, `AGENTS.md`, `Makefile`, `.mcp.json.example`.

### Key docs

- Architecture: `docs/architecture.md`
- Runtime flows: `docs/runtime-flows.md`
- Development: `docs/development.md`
- Storage model: `docs/storage.md`
- CI workflows: `docs/ci-flows.md`
- Configuration: `docs/configuration.md`
- Agent working context: `skel/AGENTS.md`
