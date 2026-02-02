export const ACTIONS_ENUM = {
  ADD_BLOCK: "add_block",
  SELECT_BLOCK: "select_block",
} as const;
export type TActionsEnum = typeof ACTIONS_ENUM[keyof typeof ACTIONS_ENUM];
