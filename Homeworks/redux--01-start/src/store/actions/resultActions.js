import ActionType from './actions';

export default {
  saveResult: result => dispatch => {
    setTimeout(() => {
      dispatch({ type: ActionType.SAVE_RESULT, result });
    }, 2000);
  },
  removeResult: id => ({ type: ActionType.REMOVE_RESULT, id }),
};
