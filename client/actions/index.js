export const SET_FORM_DETAILS = 'SET_FORM_DETAILS'
export const ADD_BASIC_DETAILS = 'ADD_BASIC_DETAILS'

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