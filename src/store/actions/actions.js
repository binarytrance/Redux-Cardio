export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RECORD_STATE = 'RECORD_STATE';
export const DELETE_RECORD = 'DELETE_RECORD';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD,
        value: value
    }
}

export const subtract = value => {
    return {
        type: SUBTRACT,
        value: value
    }
}

export const recordState = result => {
    return {
        type: RECORD_STATE,
        result: result
    }
}

export const deleteRecord = id => {
    return {
        type: DELETE_RECORD,
        recordId: id
    }
}