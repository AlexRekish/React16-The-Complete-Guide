import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import Action from './../store/actions';

class Persons extends Component {
  state = {
    persons: [],
  };

  newPerson = () => ({
    id: Math.random(), // not really unique but good enough here!
    name: 'Max',
    age: Math.floor(Math.random() * 40),
  });

  personDeletedHandler = personId => {
    this.setState(prevState => {
      return { persons: prevState.persons.filter(person => person.id !== personId) };
    });
  };

  render() {
    return (
      <div>
        <AddPerson personAdded={() => this.props.onAddPerson(this.newPerson())} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  persons: state.persons,
});

const mapDispatchToProps = dispatch => ({
  onAddPerson: newPerson => dispatch({ type: Action.ADD_PERSON, newPerson }),
  onDeletePerson: personId => dispatch({ type: Action.DELETE_PERSON, personId }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Persons);
