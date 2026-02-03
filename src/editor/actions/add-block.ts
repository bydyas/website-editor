import { selectBlock } from "./select-block";
import { updateBlockProperty, CreateBlock } from "../helpers";
import { State, Action } from "../types";
import type { TElementsEnum } from "../enums";

export function addBlock(state: State, payload: Action["payload"]) {
  const blocks = new Map(state.blocks);
  const block = new CreateBlock(payload as TElementsEnum, state.selectedBlockId);
  // Assign a child to parent
  if (state.selectedBlockId) {
    updateBlockProperty(blocks, state.selectedBlockId, "childrenIds", [block.id]);
  }

  blocks.set(block.id, block);

  return selectBlock({ ...state, blocks }, block.id);
}
