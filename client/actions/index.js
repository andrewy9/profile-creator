import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_FORM_DETAILS = 'SET_FORM_DETAILS'
export const ADD_BASIC_DETAILS = 'ADD_BASIC_DETAILS'


export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits() {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

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

export function addBasicDetails(basicDetails) {
  return {
    type: ADD_BASIC_DETAILS,
    basicDetails
  }
}

// export function fetchBasicDetails(details) {
//   return dispatch => {
//     dispatch(setBasicDetails(details))
//     return null
//   }
// }

// export function setEmploymentHistory(employmentHistory) {
//   return {
//     type: SET_EMPLOYMENT_HISTORY,
//     employmentHistory
//   }
// }

// export function fetchEmploymentHistory(employmentHistory) {
//   return dispatch => {
//     dispatch(setEmploymentHistory(employmentHistory))
//     return null
//   }
// }

