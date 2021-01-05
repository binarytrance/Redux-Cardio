import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.cntr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

// we store instructions about how the state managed by redux is used by the props in this component
// we do not manage and change the state, redux does it. hence, the state changed by redux are mapped to props
const mapStateToProps = state => { // this is the state provided to us by redux
    return {
        cntr: state.counter
    }
}

//this returns an obect whose props hold a reference to a function which gets executed to dispatch an action
const mapDispatchToProps = dispatch => { // disaptch is a helper function which will call dispatch on the store BTS
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}) // this function will be available through onIncrement property. so to dispatch this action, we have to execute this property
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);