import counter from './counterActions';
import result from './resultActions';

const ActionType = {
  INC: 'INC',
  DEC: 'DEC',
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  SAVE_RESULT: 'SAVE_RESULT',
  REMOVE_RESULT: 'REMOVE_RESULT',
};

export const Action = {
  ...counter,
  ...result,
};

export default ActionType;
