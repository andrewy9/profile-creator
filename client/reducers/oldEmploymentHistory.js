import { LOG_OUT } from '../actions'
import { APPEND_OLD_EMPLOYMENT_HISTORY, UPDATE_OLD_EMPLOYMENT_HISTORY, REMOVE_OLD_EMPLOYMENT_HISTORY } from '../actions/oldEmploymentHistory'

const initialState = { oldEmployment: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_OLD_EMPLOYMENT_HISTORY:
      return { ...state, oldEmployment: [...state.oldEmployment, action.payload] }

    case UPDATE_OLD_EMPLOYMENT_HISTORY:
      let { id, name, value } = action.payload
      const newState = [...state.oldEmployment]
      newState[id][name] = value
      return { ...state, oldEmployment: newState }

    case REMOVE_OLD_EMPLOYMENT_HISTORY:
      const filteredOldEmployment = state.oldEmployment.filter((oldEmployment, idx) => idx !== action.payload)
      return { ...state, oldEmployment: filteredOldEmployment }

    case LOG_OUT:
      return { oldEmployment: [] }

    default:
      return state
  }
}

export default reducer