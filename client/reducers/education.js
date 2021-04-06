import { LOG_OUT } from '../actions'
import { APPEND_EDUCATION, UPDATE_EDUCATION, REMOVE_EDUCATION } from '../actions/educations'

const initialState = [{
  provider: '',
  qualification: '',
  yearStart: '',
  yearEnd: ''
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_EDUCATION:
      return [...state, action.payload]

    case UPDATE_EDUCATION:
      let { id, name, value } = action.payload
      const newState = [{ ...state[0] }]
      newState[id][name] = value
      return newState

    case REMOVE_EDUCATION:
      return state.filter((education, idx) => idx !== action.payload)

    case LOG_OUT:
      return initialState

    default:
      return state
  }
}

export default reducer
