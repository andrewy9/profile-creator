import { SET_OLD_EMPLOYMENT_HISTORY } from '../actions'

const initialState = [{
  oldEmployer: '',
  oldEmploymentDate: '',
  oldRole: ''
}]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OLD_EMPLOYMENT_HISTORY:
      return action.oldEmploymentHistory

    default:
      return state
  }
}

export default reducer