const initialState = {
    counter: 0,
    recordedState: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            ...state,
            counter: state.counter + 1
        }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter +action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'RECORD_STATE':
            return {
                ...state,
                // adding elements to array immutably
                recordedState: state.recordedState.concat({id: new Date(), counter: state.counter})
            }
            case 'DELETE_RECORD':
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