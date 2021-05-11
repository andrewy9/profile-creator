import { LOG_OUT } from '../actions'
import { APPEND_SOCIAL, UPDATE_SOCIAL, REMOVE_SOCIAL } from '../actions/socials'

const initialState = { social: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_SOCIAL:
      return { ...state, social: [...state.social, action.payload] }

    case UPDATE_SOCIAL:
      let { id, name, value } = action.payload
      const newState = [...state.social]
      newState[id][name] = value
      return { ...state, social: newState }

    case REMOVE_SOCIAL:
      const filteredSocial = state.social.filter((social, idx) => idx !== action.payload)
      return { ...state, social: filteredSocial }

    case LOG_OUT:
      return { social: [] }

    default:
      return state
  }
}

export default reducer
