import { State, Action } from "../types";
import { updateBlockProperty } from "../helpers";

export function selectBlock(state: State, payload: Action["payload"]) {
  if (typeof payload !== "string" && payload !== null) {
    throw Error("payload must be string or null");
  }

  const blocks = new Map(state.blocks);
  if (state.selectedBlockId !== null) {
    updateBlockProperty(blocks, state.selectedBlockId, "selected", false);
  }
  if (payload !== null) {
    updateBlockProperty(blocks, payload, "selected", true);
  }

  return { ...state, blocks, selectedBlockId: payload };
}
