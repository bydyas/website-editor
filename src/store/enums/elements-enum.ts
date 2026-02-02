export const ELEMENTS_ENUM = {
  ROW: "row",
  COL: "column",
} as const;
export type TElementsEnum = typeof ELEMENTS_ENUM[keyof typeof ELEMENTS_ENUM];
