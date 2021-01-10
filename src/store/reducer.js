import * as actionTypes from './actionTypes';
const initialState = {
    counter: 0,
    recordedState: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
        return {
            ...state,
            counter: state.counter + 1
        }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter +action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.RECORD_STATE:
            return {
                ...state,
                // adding elements to array immutably
                recordedState: state.recordedState.concat({id: new Date(), counter: state.counter})
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