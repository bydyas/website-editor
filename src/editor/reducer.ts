import { ACTIONS_ENUM } from "./enums";
import { State, Action } from "./types";
import { addBlock, selectBlock } from "./actions";

export const reducer: React.Reducer<State, Action> = (state: State, action: Action) => {
  console.log(`TYPE: ${action.type} // PAYLOAD: ${JSON.stringify(action.payload)}.`);

  switch (action.type) {
    case ACTIONS_ENUM.SELECT_BLOCK:
      return selectBlock(state, action.payload);
    case ACTIONS_ENUM.ADD_BLOCK:
      return addBlock(state, action.payload);
    default:
      return state;
  }
};
