import {ADD_PROP,EDIT_PROP} from './actiontypes';



export const addProp = (newProp) => {
    return {
        type: ADD_PROP,
        newProp
    }
}

export const editProp = (editableProp) => {
    return {
        type: EDIT_PROP,
        editableProp
    }
}