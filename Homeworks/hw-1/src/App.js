import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: [
      {
        name: `Alex`,
        age: 26
      },
      {
        name: `Alice`,
        age: 26
      },
      {
        name: `Murkey`,
        age: 1
      }
    ]
  };

  nameChangedHandler = (event) => {
    this.setState({
      username: [
        {
          name: `Alex`,
          age: 26
        }, {
          name: event.currentTarget.value,
          age: 26
        }, {
          name: `Murkey`,
          age: 1
        }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput
          changed={this.nameChangedHandler}
          value={this.state.username[1].name}
        />
        <UserOutput 
          name={this.state.username[0].name} 
          age={this.state.username[0].age}
        />
        <UserOutput 
          name={this.state.username[1].name} 
          age={this.state.username[1].age}
        />
        <UserOutput 
          name={this.state.username[2].name} 
          age={this.state.username[2].age}
        />
      </div>
    );
  }
}

export default App;
