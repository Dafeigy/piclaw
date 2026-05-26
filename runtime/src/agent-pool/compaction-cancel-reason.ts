/**
 * Side-channel for extension-requested compaction cancellations that are not
 * user aborts.
 *
 * Upstream AgentSession only lets `session_before_compact` handlers stop the
 * built-in compactor via `{ cancel: true }`, and then throws the generic
 * "Compaction cancelled" error.  Piclaw needs the real reason so managed
 * wrappers can record backoff/emergency-rotate instead of treating safety
 * failures like user interrupts.
 */

type CancellationReason = {
  message: string;
  atMs: number;
};

const reasonsBySessionManager = new WeakMap<object, CancellationReason>();

export function recordCompactionCancellationReason(sessionManager: unknown, message: string): void {
  if (!sessionManager || (typeof sessionManager !== "object" && typeof sessionManager !== "function")) return;
  const trimmed = message.trim();
  if (!trimmed) return;
  reasonsBySessionManager.set(sessionManager as object, { message: trimmed, atMs: Date.now() });
}

export function consumeCompactionCancellationReason(
  session: { sessionManager?: unknown },
  maxAgeMs = 10 * 60_000,
): string | null {
  const sessionManager = session.sessionManager;
  if (!sessionManager || (typeof sessionManager !== "object" && typeof sessionManager !== "function")) return null;
  const key = sessionManager as object;
  const reason = reasonsBySessionManager.get(key);
  if (!reason) return null;
  reasonsBySessionManager.delete(key);
  if (Date.now() - reason.atMs > maxAgeMs) return null;
  return reason.message;
}
