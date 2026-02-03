import { useReducer } from "react";
import { ACTIONS_ENUM, ELEMENTS_ENUM } from "../enums";
import { reducer } from "../reducer";
import type { State, Id } from "../types";

const initialState: State = { selectedBlockId: null, selectedBlockElement: null, blocks: new Map() };

export type TUseEditor = Pick<State, "selectedBlockElement" | "blocks"> & {
  addRow: () => void;
  addColumn: () => void;
  selectBlock: (id: Id | null) => void;
};

export function useEditor(): TUseEditor {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addRow = () => dispatch({ type: ACTIONS_ENUM.ADD_BLOCK, payload: ELEMENTS_ENUM.ROW });
  const addColumn = () => dispatch({ type: ACTIONS_ENUM.ADD_BLOCK, payload: ELEMENTS_ENUM.COL });
  const selectBlock = (id: Id | null) => dispatch({ type: ACTIONS_ENUM.SELECT_BLOCK, payload: id });

  return {
    blocks: state.blocks,
    selectedBlockElement: state.selectedBlockElement,
    addRow,
    addColumn,
    selectBlock,
  };
}
