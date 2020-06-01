import {ADD_PROP, EDIT_PROP} from '../actions/actiontypes';




export default function properties(state = [{
    key: '0',
    propname: 'Area',
  },
  {
    key: '1',
    propname: 'Diameter',
  }], action) {

        switch (action.type) {
            case ADD_PROP:
                return [
                    ...state,
                    action.newProp
                ]
            case EDIT_PROP:
                return {
                    ...state,
                    state: action.newState
                }
                default:
                     return state
        }
  }