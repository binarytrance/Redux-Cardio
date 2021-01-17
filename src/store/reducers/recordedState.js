import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    recordedState: []
}

const deleteRecord = (state, action) => {
     // deleting element inside array immutably
    const updatedArray = state.recordedState.filter(record => record.id !== action.recordId);
    return updateObject(state, {recordedState: updatedArray})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECORD_STATE:
            return updateObject(state, {recordedState: state.recordedState.concat({id: new Date(), counter: action.result})}) // adding elements to array immutably
        case actionTypes.DELETE_RECORD:
                return deleteRecord(state, action);
            default:
                return state;
        }
    }


export default reducer;