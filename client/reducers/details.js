import { SET_FORM_DETAILS, ADD_BASIC_DETAILS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DETAILS:
      return action.details
  
    case ADD_BASIC_DETAILS:
      return [...state, action.basicDetails]    

    // case SET_EMPLOYMENT_HISTORY:
    //   return [action.details, action.employmentHistory]

    // case EDIT_EMPLOYMENT_HISTORY:
    //   return [action.details, action.employmentHistory]  

    default:
      return state
  }
}

export default reducer
