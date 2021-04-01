import { SET_PROFILES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return action.payload

    default:
      return state
  }
}

export default reducer
