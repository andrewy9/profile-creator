import { LOG_OUT, LOG_IN, UPDATE_PROFILE_LIST } from '../actions'

const initialState = {
  id: '',
  name: '',
  email: '',
  image: '',
  profileList: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...initialState, ...action.payload }

    case UPDATE_PROFILE_LIST:
      return { ...state, profileList: action.payload }

    case LOG_OUT:
      return { ...initialState }

    default:
      return state
  }
}

export default reducer