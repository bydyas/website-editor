import { useReducer } from "react";
import { ACTIONS_ENUM, ELEMENTS_ENUM } from "../enums";
import { reducer } from "../reducer";
import type { State, Id } from "../types";

const initialState: State = { selectedBlockId: null, blocks: new Map() };

export function useEditor() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addRow = () => dispatch({ type: ACTIONS_ENUM.ADD_BLOCK, payload: ELEMENTS_ENUM.ROW });
  const addColumn = () => dispatch({ type: ACTIONS_ENUM.ADD_BLOCK, payload: ELEMENTS_ENUM.COL });
  const selectBlock = (id: Id | null) => dispatch({ type: ACTIONS_ENUM.SELECT_BLOCK, payload: id });

  return {
    blocks: state.blocks,
    addRow,
    addColumn,
    selectBlock,
  };
}
