import { FETCH_PROFILE_LIST, SET_USER } from '../actions'

const initialState = {
  id: 'before change',
  name: '',
  email: '',
  image: '',
  profiles: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload

    case FETCH_PROFILE_LIST:
      return { ...state, profiles: action.payload }
    default:
      return state
  }
}

export default reducer