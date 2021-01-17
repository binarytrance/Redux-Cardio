import * as actionTypes from '../actions/actions';
const initialState = {
    recordedState: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.RECORD_STATE:
            return {
                ...state,
                // adding elements to array immutably
                recordedState: state.recordedState.concat({id: new Date(), counter: action.result})
            }
            case actionTypes.DELETE_RECORD:
                return {
                    ...state,
                    // deleting element inside array immutably
                    recordedState: state.recordedState.filter(record => record.id !== action.recordId)
                }
            default:
                return state;
        }
    }


export default reducer;