export const SET_BASIC_DETAILS = 'SET_BASIC_DETAILS'
export const SET_EMPLOYMENT_HISTORY = 'SET_EMPLOYMENT_HISTORY'
export const SET_OLD_EMPLOYMENT_HISTORY = 'SET_OLD_EMPLOYMENT_HISTORY'
export const SET_EDUCATION = 'SET_EDUCATION'
export const SET_USER = 'SET_USER'

// SetReducer
export function setReducer (payload, type) {
  return {
    type,
    payload
  }
}

// BasicDetails
export function fetchBasicDetails (details) {
  return dispatch => {
    dispatch(setReducer(details, SET_BASIC_DETAILS))
    return null
  }
}

// EmploymentHistory
export function fetchEmploymentHistory (employmentHistory) {
  return dispatch => {
    dispatch(setReducer(employmentHistory, SET_EMPLOYMENT_HISTORY))
    return null
  }
}

// OldEmploymentHistory
export function fetchOldEmploymentHistory (oldEmploymentHistory) {
  return dispatch => {
    dispatch(setReducer(oldEmploymentHistory, SET_OLD_EMPLOYMENT_HISTORY))
  }
}

// Education
export function fetchEducation (education) {
  return dispatch => {
    dispatch(setReducer(education, SET_EDUCATION))
  }
}

// User
export function fetchUser (user) {
  return dispatch => {
    dispatch(setReducer(user, SET_USER))
  }
}
