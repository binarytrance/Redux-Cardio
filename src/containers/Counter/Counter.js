import React, { Component } from 'react';
import * as actionTypes from '../../store/actionTypes';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    render () {
        console.log(this.props.recordedState);

        return (
        <React.Fragment>
            <div>
                <CounterOutput value={this.props.cntr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter()}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter()}  />
            </div>
            <button onClick={this.props.recordState}>CLick me</button>
            <ul>
                {this.props.recordedState.map(stateValue =>
                    <li key={stateValue.id} onClick={() => this.props.onDeleteRecord(stateValue.id)}>{stateValue.counter}</li>
                )}
            </ul>
        </React.Fragment>
        );
    }
}

// we store instructions about how the state managed by redux is used by the props in this component
// we do not manage and change the state, redux does it. hence, the state changed by redux are mapped to props
const mapStateToProps = state => { // this is the state provided to us by redux
    return {
        cntr: state.counter,
        recordedState: state.recordedState
    }
}

//this returns an obect whose props hold a reference to a function which gets executed to dispatch an action
const mapDispatchToProps = dispatch => { // disaptch is a helper function which will call dispatch on the store BTS
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}), // this function will be available through onIncrement property. so to dispatch this action, we have to execute this property
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5 }),
        recordState: () => dispatch({type: actionTypes.RECORD_STATE}),
        onDeleteRecord: (id) =>dispatch({type: actionTypes.DELETE_RECORD, recordId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);