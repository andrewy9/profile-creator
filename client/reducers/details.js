import { SET_BASIC_DETAILS } from '../actions'

const initialState = [{
  name: '',
  phone: '',
  email: '',
  profileIntro: '',
  employmentHistory: ''
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASIC_DETAILS:
      return action.payload

    default:
      return state
  }
}

export default reducer
