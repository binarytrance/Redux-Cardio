import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
// import { increment, decrement, add, subtract, recordState, deleteRecord } from "../../store/actionTypes";

class Counter extends Component {
    render () {
        // console.log(this.props.recordedState);

        return (
        <React.Fragment>
            <div>
                <CounterOutput value={this.props.cntr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter()}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter()}  />
            </div>
            <button onClick={() => this.props.recordState(this.props.cntr)}>CLick me</button>
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
    // console.log(state)
    return {
        cntr: state.ctr.counter,
        recordedState: state.rec.recordedState
    }
}

//this returns an obect whose props hold a reference to a function which gets executed to dispatch an action
const mapDispatchToProps = dispatch => { // disaptch is a helper function which will call dispatch on the store BTS
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()), // this function will be available through onIncrement property. so to dispatch this action, we have to execute this property
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
        recordState: (result) => dispatch(actionCreators.recordState(result)),
        onDeleteRecord: (id) =>dispatch(actionCreators.deleteRecord(id))
    }
}
// console.log('asdf', mapStateToProps, mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);