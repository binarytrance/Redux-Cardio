const updateObject = (initialObject, updatedValues) => { // updatedValues is an object with the updated properties
    return {
        ...initialObject,
        ...updatedValues
    }
}

export default updateObject;