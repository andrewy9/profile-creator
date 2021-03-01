export const SET_FORM_DETAILS = 'SET_FORM_DETAILS'
export const ADD_BASIC_DETAILS = 'ADD_BASIC_DETAILS'
export const SET_EMPLOYMENT_HISTORY = 'SET_EMPLOYMENT_HISTORY'
export const SET_OLD_EMPLOYMENT_HISTORY = 'SET_OLD_EMPLOYMENT_HISTORY'
export const SET_EDUCATION = 'SET_EDUCATION'


//BasicDetails
export function setFormDetails(details) {
  return {
    type: SET_FORM_DETAILS,
    details
  }
}

export function fetchFormDetails(details) {
  return dispatch => {
    dispatch(setFormDetails(details))
    return null
  }
}

//EmploymentHistory
export function setEmploymentHistory(employmentHistory) {
  return {
    type: SET_EMPLOYMENT_HISTORY,
    employmentHistory
  }
}

export function fetchEmploymentHistory(employmentHistory) {
  return dispatch => {
    dispatch(setEmploymentHistory(employmentHistory))
    return null
  }
}

//OldEmploymentHistory
export function setOldEmploymentHistory(oldEmploymentHistory) {
  return {
    type: SET_OLD_EMPLOYMENT_HISTORY,
    oldEmploymentHistory
  }
}

export function fetchOldEmploymentHistory(oldEmploymentHistory) {
  return dispatch => {
    dispatch(setOldEmploymentHistory(oldEmploymentHistory))
  }
}

//Education
export function setEducation(education) {
  return {
    type: SET_EDUCATION,
    education
  }
}

export function fetchEducation(education) {
  return dispatch => {
    dispatch(setEducation(education))
  }
}