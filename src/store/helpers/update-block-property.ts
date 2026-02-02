import type { State, Id, Block } from "../types";

export function updateBlockProperty<K extends keyof Block>(
  blocksMap: State["blocks"],
  blockId: Id,
  property: K,
  value: Block[K]
) {
  const block = blocksMap.get(blockId);
  if (!block) throw Error(`block ${blockId} is not existed`);

  blocksMap.set(blockId, {
    ...block,
    [property]: Array.isArray(block[property]) ? (block[property] as unknown[]).concat(value) : value,
  });
}
