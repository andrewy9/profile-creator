import { SET_PROFILE } from '../actions'

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  location: '',
  profileIntro: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      let { name, value } = action.payload
      const newState = { ...state }
      newState[name] = value
      return newState

    default:
      return state
  }
}

export default reducer
