import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { AuthStorage, InMemoryAuthStorageBackend } from "../../../node_modules/@earendil-works/pi-coding-agent/dist/core/auth-storage.js";
import { ModelRegistry } from "../../../node_modules/@earendil-works/pi-coding-agent/dist/core/model-registry.js";
import { patchModelRegistryText, patchPiOAuthProviderAuth } from "../../scripts/patch-pi-oauth-provider-auth.js";

const repoRoot = resolve(import.meta.dir, "..", "..", "..");
const marker = "PICLAW_COMPAT_REMOVE_AFTER_PI_OAUTH_GETAPIKEY_REQUIRED";

describe("Pi OAuth provider auth compatibility patch", () => {
  test("patches model-registry text to normalize legacy OAuth providers at registration", () => {
    const source = `function migrateLegacyRegisterProviderConfigValue(providerName, field, value) {\n}\nclass ModelRegistry {\n  applyProviderConfig(providerName, config) {\n        if (config.oauth) {\n            const oauthProvider = {\n                ...config.oauth,\n                id: providerName,\n            };\n            registerOAuthProvider(oauthProvider);\n        }\n  }\n}`;

    const result = patchModelRegistryText(source);

    expect(result.changed).toBe(true);
    expect(result.text).toContain(marker);
    expect(result.text).toContain("normalizeOAuthProviderConfig(providerName, config.oauth)");
  });

  test("installed Pi model registry includes the temporary normalization shim", () => {
    const result = patchPiOAuthProviderAuth(repoRoot);
    expect(["already patched", "patched"]).toContain(result.reason);
    const modelRegistryPath = join(repoRoot, "node_modules", "@earendil-works", "pi-coding-agent", "dist", "core", "model-registry.js");
    expect(existsSync(modelRegistryPath)).toBe(true);
    const source = readFileSync(modelRegistryPath, "utf8");
    expect(source).toContain(marker);
    expect(source).toContain("normalizeOAuthProviderConfig(providerName, config.oauth)");
  });

  test("real ModelRegistry supports legacy custom OAuth provider configs without getApiKey", async () => {
    const providerName = `legacy-oauth-test-${Date.now()}`;
    const authStorage = new AuthStorage(new InMemoryAuthStorageBackend());
    const registry = new ModelRegistry(authStorage, undefined as unknown as string);

    try {
      registry.registerProvider(providerName, {
        name: "Legacy OAuth Test",
        baseUrl: "https://example.invalid/v1",
        api: "openai-completions",
        oauth: {
          name: "Legacy OAuth Test",
          // Intentionally no getApiKey(): this matches the broken production shape.
          login: async () => ({ access: "login-token", refresh: "refresh-token", expires: Date.now() + 60_000 }),
          refreshToken: async () => ({ access: "refreshed-token", refresh: "refresh-token", expires: Date.now() + 60_000 }),
        },
        models: [{ id: "model", name: "Model", contextWindow: 1000, maxTokens: 100 }],
      } as any);

      authStorage.set(providerName, { type: "oauth", access: "stored-token", refresh: "refresh-token", expires: Date.now() + 60_000 } as any);

      const apiKey = await registry.getApiKeyForProvider(providerName);
      expect(apiKey).toBe("stored-token");

      const model = registry.find(providerName, "model")!;
      expect(model).toBeTruthy();
      const auth = await registry.getApiKeyAndHeaders(model);
      expect(auth).toMatchObject({ ok: true, apiKey: "stored-token" });
    } finally {
      registry.unregisterProvider(providerName);
    }
  });
});
