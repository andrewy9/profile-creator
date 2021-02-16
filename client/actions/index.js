import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_BASIC_DETAILS = 'SET_BASIC_DETAILS'

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

export function setBasicDetails(details) {
  return {
    type: SET_BASIC_DETAILS,
    details
  }
}

export function fetchBasicDetails(details) {
  return dispatch => {
    dispatch(setBasicDetails(details))
    return null
  }
}

export function setEmploymentHistory(employmentHistory) {
  return {
    type: SET_EMPLOYMENT_HISTORY,
    history
  }
}

export function fetchEmploymentHistory(employmentHistory) {
  return dispatch => {
    dispatch(setEmploymentHistory(employmentHistory))
    return null
  }
}