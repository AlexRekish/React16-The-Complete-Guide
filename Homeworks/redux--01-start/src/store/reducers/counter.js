import ActionType from '../actions/actions';
import { updateObject } from '../utils';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INC:
      return updateObject(state, { counter: ++state.counter });
    case ActionType.DEC:
      return updateObject(state, { counter: --state.counter });
    case ActionType.ADD:
      return updateObject(state, { counter: state.counter + action.value });
    case ActionType.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });
    default:
      return state;
  }
};

export default reducer;
