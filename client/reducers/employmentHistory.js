import { LOG_OUT } from '../actions'
import { APPEND_EMPLOYMENT_HISTORY, REMOVE_EMPLOYMENT_HISTORY, UPDATE_EMPLOYMENT_HISTORY } from '../actions/employmentHistory'

const initialState = [{
  employer: '',
  employmentDateStart: '',
  employmentDateEnd: '',
  role: '',
  details: ''
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_EMPLOYMENT_HISTORY:
      return [...state, action.payload]

    case UPDATE_EMPLOYMENT_HISTORY:
      let { id, name, value } = action.payload
      const newState = [{ ...state[0] }]
      newState[id][name] = value
      console.log(initialState)
      return newState

    case REMOVE_EMPLOYMENT_HISTORY:
      return state.filter((employment, idx) => idx !== action.payload)

    case LOG_OUT:
      return initialState

    default:
      return state
  }
}

export default reducer