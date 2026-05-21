/**
 * Shared agent identity state for the visual UI.
 * Populated by status polling; consumed by MessageItem, page title, notifications.
 */
import { signal } from "@preact/signals";

const DEFAULT_AGENT_NAME = "PiClaw";

export const agentDisplayName = signal<string>(DEFAULT_AGENT_NAME);

export function updateAgentDisplayName(name: string | null | undefined): void {
  const resolved = (typeof name === "string" && name.trim()) ? name.trim() : DEFAULT_AGENT_NAME;
  if (agentDisplayName.value !== resolved) {
    agentDisplayName.value = resolved;
    // Update browser tab title
    document.title = resolved;
  }
}
