import { LOG_OUT } from '../actions'
import { APPEND_OLD_EMPLOYMENT_HISTORY, UPDATE_OLD_EMPLOYMENT_HISTORY, REMOVE_OLD_EMPLOYMENT_HISTORY } from '../actions/oldEmploymentHistory'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_OLD_EMPLOYMENT_HISTORY:
      return [...state, action.payload]

    case UPDATE_OLD_EMPLOYMENT_HISTORY:
      let { id, name, value } = action.payload
      const newState = [...state]
      newState[id][name] = value
      return newState

    case REMOVE_OLD_EMPLOYMENT_HISTORY:
      return state.filter((oldEmployment, idx) => idx !== action.payload)

    case LOG_OUT:
      return initialState

    default:
      return state
  }
}

export default reducer