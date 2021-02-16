import { SET_BASIC_DETAILS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASIC_DETAILS:
      return action.details
    default:
      return state
  }
}

export default reducer
