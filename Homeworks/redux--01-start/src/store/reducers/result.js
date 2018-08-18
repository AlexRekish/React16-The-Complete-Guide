import ActionType from '../actions/actions';
import { updateObject } from '../utils';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: +new Date(), value: action.result }),
      });
    case ActionType.REMOVE_RESULT:
      return updateObject(state, { results: state.results.filter(res => res.id !== action.id) });
    default:
      return state;
  }
};

export default reducer;
