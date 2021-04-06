import { LOG_OUT } from '../actions'
import { APPEND_SOCIAL, UPDATE_SOCIAL, REMOVE_SOCIAL } from '../actions/socials'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_SOCIAL:
      return [...state, action.payload]

    case UPDATE_SOCIAL:
      let { id, name, value } = action.payload
      const newState = [...state]
      newState[id][name] = value
      return newState

    case REMOVE_SOCIAL:
      return state.filter((social, idx) => idx !== action.payload)

    case LOG_OUT:
      return initialState

    default:
      return state
  }
}

export default reducer
