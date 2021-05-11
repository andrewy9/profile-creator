import { LOG_OUT } from '../actions'
import { APPEND_EMPLOYMENT_HISTORY, REMOVE_EMPLOYMENT_HISTORY, UPDATE_EMPLOYMENT_HISTORY } from '../actions/employmentHistory'

const initialState = {
  employment: [{
    employer: '',
    employmentDateStart: '',
    employmentDateEnd: '',
    role: '',
    details: ''
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_EMPLOYMENT_HISTORY:
      return { ...state, employment: [...state.employment, action.payload] }

    case UPDATE_EMPLOYMENT_HISTORY:
      let { id, name, value } = action.payload
      const newState = [...state.employment]
      newState[id][name] = value
      return { ...state, employment: newState }

    case REMOVE_EMPLOYMENT_HISTORY:
      const filteredEmployment = state.employment.filter((employment, idx) => idx !== action.payload)
      return { ...state, employment: filteredEmployment }

    case LOG_OUT:
      return {
        employment: [{
          employer: '',
          employmentDateStart: '',
          employmentDateEnd: '',
          role: '',
          details: ''
        }]
      }

    default:
      return state
  }
}

export default reducer