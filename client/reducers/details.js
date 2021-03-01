import { SET_FORM_DETAILS, ADD_BASIC_DETAILS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DETAILS:
      return action.details

    // case ADD_BASIC_DETAILS:
    //   return [...state, action.basicDetails]    

    default:
      return state
  }
}

export default reducer
