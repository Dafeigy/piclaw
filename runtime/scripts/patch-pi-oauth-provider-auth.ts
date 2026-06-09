#!/usr/bin/env bun
/**
 * Patch the bundled Pi model registry so legacy/custom OAuth provider configs
 * are normalized to the real upstream auth-storage path: provider.getApiKey().
 *
 * TODO(PICLAW_COMPAT_REMOVE_AFTER_PI_OAUTH_GETAPIKEY_REQUIRED): remove this
 * patch once @earendil-works/pi-coding-agent requires oauth.getApiKey in its
 * provider config schema and all Piclaw add-ons/configs have migrated.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const MARKER = "PICLAW_COMPAT_REMOVE_AFTER_PI_OAUTH_GETAPIKEY_REQUIRED";

const HELPER = `
// ${MARKER}
function createLegacyOAuthGetApiKeyShim(providerName) {
    return (credentials) => {
        const candidate = credentials?.access ?? credentials?.accessToken ?? credentials?.apiKey ?? credentials?.token;
        if (typeof candidate === "string" && candidate.length > 0) {
            return candidate;
        }
        throw new Error(` + "`OAuth provider ${providerName} does not expose getApiKey(credentials), and its credentials do not contain an access/accessToken/apiKey/token string. Update the provider config to define oauth.getApiKey(credentials).`" + `);
    };
}
function normalizeOAuthProviderConfig(providerName, oauth) {
    if (!oauth || typeof oauth.getApiKey === "function") {
        return oauth;
    }
    return {
        ...oauth,
        getApiKey: createLegacyOAuthGetApiKeyShim(providerName),
    };
}
`;

export interface PatchResult {
  path: string;
  changed: boolean;
  reason: string;
}

export function patchModelRegistryText(input: string): { text: string; changed: boolean; reason: string } {
  if (input.includes(MARKER) && input.includes("normalizeOAuthProviderConfig(providerName, config.oauth)")) {
    return { text: input, changed: false, reason: "already patched" };
  }

  const helperAnchor = "function migrateLegacyRegisterProviderConfigValue(providerName, field, value) {";
  if (!input.includes(helperAnchor)) {
    return { text: input, changed: false, reason: "helper anchor not found" };
  }

  let text = input.replace(helperAnchor, `${HELPER}\n${helperAnchor}`);
  const before = `            const oauthProvider = {\n                ...config.oauth,\n                id: providerName,\n            };`;
  const after = `            const oauthProvider = {\n                ...normalizeOAuthProviderConfig(providerName, config.oauth),\n                id: providerName,\n            };`;
  if (!text.includes(before)) {
    return { text: input, changed: false, reason: "oauth provider construction anchor not found" };
  }
  text = text.replace(before, after);
  return { text, changed: true, reason: "patched" };
}

export function patchPiOAuthProviderAuth(root = process.cwd()): PatchResult {
  const path = resolve(root, "node_modules", "@earendil-works", "pi-coding-agent", "dist", "core", "model-registry.js");
  if (!existsSync(path)) {
    return { path, changed: false, reason: "model-registry.js not found" };
  }
  const input = readFileSync(path, "utf8");
  const patched = patchModelRegistryText(input);
  if (patched.changed) {
    writeFileSync(path, patched.text);
  }
  return { path, changed: patched.changed, reason: patched.reason };
}

if (import.meta.main) {
  const rootArg = process.argv.find((arg) => arg.startsWith("--root="));
  const root = rootArg ? rootArg.slice("--root=".length) : process.cwd();
  const result = patchPiOAuthProviderAuth(root);
  console.log(`[patch-pi-oauth-provider-auth] ${result.changed ? "patched" : "skipped"}: ${result.reason} (${result.path})`);
  if (!result.changed && result.reason !== "already patched") {
    process.exitCode = 1;
  }
}
