import { SET_FORM_DATA } from '../actions'

const initialState = [{
  name: '',
  phone: '',
  email: '',
  profile_intro: '',
  employmentHistory: [],
  oldEmploymentHistory: [],
  education: []
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return action.data

    default:
      return state
  }
}

export default reducer
