import type { Block, Id } from "../types";
import type { TElementsEnum } from "../enums";

export class CreateBlock implements Block {
  id;
  childrenIds;
  parentId;
  elementType;
  selected = false;

  constructor(elementType: TElementsEnum, parentId?: null | Id, childrenIds?: Id[]) {
    this.id = crypto ? crypto.randomUUID() : `${elementType}-${Date.now()}`;
    this.elementType = elementType;
    this.parentId = parentId ?? null;
    this.childrenIds = childrenIds ?? [];
  }
}
