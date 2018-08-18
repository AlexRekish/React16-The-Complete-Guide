import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { Action } from '../../store/actions/actions';

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCount} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCount} />
        <CounterControl label="Add 5" clicked={this.props.onAddFiveToCount} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractFiveFromCount} />
        <button onClick={() => this.props.onSaveResult(this.props.ctr)}>Save counter</button>
        <ul>
          {this.props.savedResults.map(res => (
            <li key={res.id} onClick={() => this.props.onRemoveResult(res.id)}>
              {res.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ctr: state.ctr.counter,
  savedResults: state.res.results,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCount: () => dispatch(Action.inc()),
  onDecrementCount: () => dispatch(Action.dec()),
  onAddFiveToCount: () => dispatch(Action.add(5)),
  onSubtractFiveFromCount: () => dispatch(Action.subtract(5)),
  onSaveResult: result => dispatch(Action.saveResult(result)),
  onRemoveResult: id => dispatch(Action.removeResult(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
