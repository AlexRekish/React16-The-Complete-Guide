import Action from './actions';

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.ADD_PERSON:
      return {
        persons: state.persons.concat(action.newPerson),
      };

    case Action.DELETE_PERSON:
      return {
        persons: state.persons.filter(person => person.id !== action.personId),
      };

    default:
      return state;
  }
};

export default reducer;
