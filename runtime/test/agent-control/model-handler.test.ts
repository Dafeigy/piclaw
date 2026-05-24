import { beforeEach, expect, test } from "bun:test";

import "../helpers.js";
import { handleModel } from "../../src/agent-control/handlers/model.js";
import { initDatabase } from "../../src/db.js";

beforeEach(() => {
  initDatabase();
});

function makeRegistry(models: any[]) {
  return {
    refresh: () => undefined,
    getAll: () => models,
    getAvailable: () => models,
  };
}

test("handleModel compacts with the current larger model before downshifting", async () => {
  const large = { provider: "test", id: "large", contextWindow: 200_000, reasoning: false };
  const small = { provider: "test", id: "small", contextWindow: 100_000, reasoning: false };
  let usageTokens = 120_000;
  let compactCalls = 0;
  let compactInstructions = "";
  const session: any = {
    model: large,
    thinkingLevel: "medium",
    isCompacting: false,
    getContextUsage: () => ({ tokens: usageTokens }),
    sessionManager: {
      buildSessionContext: () => ({ messages: [{ role: "user", content: [{ type: "text", text: "x" }] }] }),
    },
    async compact(instructions?: string) {
      compactCalls += 1;
      compactInstructions = instructions || "";
      expect(this.model).toBe(large);
      usageTokens = 20_000;
      return { summary: "compacted", tokensBefore: 120_000, firstKeptEntryId: "kept" };
    },
    async setModel(model: any) {
      this.model = model;
    },
    supportsThinking: () => false,
  };

  const result = await handleModel(session, makeRegistry([large, small]) as any, {
    type: "model",
    raw: "/model test/small",
    provider: "test",
    modelId: "small",
  } as any);

  expect(result.status).toBe("success");
  expect(session.model).toBe(small);
  expect(compactCalls).toBe(1);
  expect(compactInstructions).toContain("piclaw:target-context-window=100000");
  expect(result.message).toContain("Compacted with the previous model first");
});
