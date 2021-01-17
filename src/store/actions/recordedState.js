import * as actionTypes from "./actionTypes";

// synchronous action creator that actually
const saveState = (result) => {
    return {
        type: actionTypes.RECORD_STATE,
        result: result
    }
}
// doesn't make it to the store
export const recordState = result => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveState(result));
        }, 2000);
    }
}

export const deleteRecord = id => {
    return {
        type: actionTypes.DELETE_RECORD,
        recordId: id
    }
}