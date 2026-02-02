import { TElementsEnum } from "./enums";
import type { TActionsEnum } from "./enums/actions-enum";

export type Id = string;

export interface State {
  selectedBlockId: Id | null;
  blocks: Map<Id, Block>;
}

export interface Action {
  type: TActionsEnum;
  payload?: unknown;
}

export interface Block {
  id: Id;
  parentId: Id | null;
  childrenIds: Id[];
  elementType: TElementsEnum;
  selected: boolean;
}
