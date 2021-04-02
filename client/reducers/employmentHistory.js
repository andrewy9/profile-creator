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
      const newState = [...state]
      newState[id][name] = value
      return newState

    case REMOVE_EMPLOYMENT_HISTORY:
      return state.filter((employment, idx) => idx !== action.payload)

    default:
      return state
  }
}

export default reducer