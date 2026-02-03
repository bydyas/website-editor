import { State, Action, Block } from "../types";
import { updateBlockProperty } from "../helpers";

export function selectBlock(state: State, payload: Action["payload"]) {
  if (typeof payload !== "string" && payload !== null) {
    throw Error("payload must be string or null");
  }

  const blocks = new Map(state.blocks);
  let selectedBlock: Block | undefined = undefined;
  if (state.selectedBlockId !== null) {
    updateBlockProperty(blocks, state.selectedBlockId, "selected", false);
  }
  if (payload !== null) {
    selectedBlock = updateBlockProperty(blocks, payload, "selected", true);
  }

  return { ...state, blocks, selectedBlockId: payload, selectedBlockElement: selectedBlock?.elementType || null };
}
