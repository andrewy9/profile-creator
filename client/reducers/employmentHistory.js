import { SET_EMPLOYMENT_HISTORY } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYMENT_HISTORY:
      return action.employmentHistory

    default:
      return state
  }
}

export default reducer