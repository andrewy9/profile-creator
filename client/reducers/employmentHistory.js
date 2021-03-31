import { SET_EMPLOYMENT_HISTORY } from '../actions'

const initialState = [{
  employer: '',
  employmentDateStart: '', //New
  employmentDateEnd: '', //New
  role: '',
  details: ''
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYMENT_HISTORY:
      return action.payload

    default:
      return state
  }
}

export default reducer
