import { SET_PROFILE, ADD_PICTURE, LOG_OUT } from '../actions'

const initialState = {
  profileName: '',
  firstName: '',
  lastName: '',
  profileImage: {
    image: null,
    preview: null
  },
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
      console.log(initialState)
      return newState

    case ADD_PICTURE:
      return { ...state, profileImage: action.payload }

    case LOG_OUT:
      return { ...initialState }

    default:
      return state
  }
}

export default reducer
