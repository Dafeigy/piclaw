import { describe, expect, test } from "bun:test";
import "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";
import { imageProcessing } from "../../src/extensions/image-processing.js";
import bunRunnerExtension from "../../extensions/integrations/bun-runner/index.ts";

function createUiRecorder() {
  const messages: Array<string | undefined> = [];
  const indicators: Array<{ frames?: string[]; intervalMs?: number } | undefined> = [];
  return {
    ctx: {
      hasUI: true,
      ui: {
        setWorkingMessage(message?: string) { messages.push(message); },
        setWorkingIndicator(options?: { frames?: string[]; intervalMs?: number }) { indicators.push(options); },
      },
    },
    messages,
    indicators,
  };
}

describe("Pi 0.68.0 built-in and packaged adoption", () => {
  test("image_process clears working indicator after missing-file failure", async () => {
    const fake = createFakeExtensionApi();
    imageProcessing(fake.api);
    const tool = fake.tools.get("image_process");
    if (!tool) throw new Error("image_process not registered");

    const ui = createUiRecorder();
    const result = await tool.execute("img-missing", {
      action: "resize",
      input: "missing.png",
      width: 100,
    }, undefined, undefined, ui.ctx);

    expect(result.details.error).toBe("not_found");
    expect(ui.messages[0]).toBe("Image: resizing missing.png…");
    expect(ui.messages[ui.messages.length - 1]).toBeUndefined();
    expect(ui.indicators[0]).toEqual({
      frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
      intervalMs: 90,
    });
    expect(ui.indicators[ui.indicators.length - 1]).toEqual({ frames: [] });
  });

  // office-tools tests removed: office_read/office_write now shipped as @rcarmo/piclaw-addon-office-tools


  test("bun-runner remains a dedicated packaged integration and stays separate from bash", () => {
    const fake = createFakeExtensionApi();
    bunRunnerExtension(fake.api);
    expect(fake.tools.has("bun_run")).toBe(true);
    expect(fake.tools.has("bash")).toBe(false);
    expect(String(fake.tools.get("bun_run")?.description ?? "")).toContain("workspace Bun script");
  });
});
