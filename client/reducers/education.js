import { SET_EDUCATION } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDUCATION:
      return action.education

    default:
      return state
  }
}

export default reducer