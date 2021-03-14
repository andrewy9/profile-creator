import { SET_FORM_DETAILS } from '../actions'

const initialState = [{
  name: '',
  phone: '',
  email: '',
  profileIntro: '',
  employmentHistory: '',
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DETAILS:
      return action.details

    default:
      return state
  }
}

export default reducer
