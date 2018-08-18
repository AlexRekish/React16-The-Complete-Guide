import ActionType from './actions';

export default {
  inc: () => ({ type: ActionType.INC }),
  dec: () => ({ type: ActionType.DEC }),
  add: value => ({ type: ActionType.ADD, value }),
  subtract: value => ({ type: ActionType.SUBTRACT, value }),
};
