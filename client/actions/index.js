import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_BASIC_DETAILS = 'SET_BASIC_DETAILS'

export const SET_PROFILE_INTRO = 'SET_PROFILE_INTRO'
export const SET_OLDER_EMPLOYMENT_HISTORY = 'SET_OLDER_EMPLOYMENT_HISTORY'
export const SET_EMPLOYMENT_HISTORY = 'SET_EMPLOYMENT_HISTORY'


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



export function setProfileIntro(details) {
  return {
    type: SET_PROFILE_INTRO,
    details
  }
}

export function fetchProfileIntro(detials) {
  return dispatch => {
    dispatch(setProfileIntro(details))
    return null
  }
}

export function setOlderEmploymentHistory(details) {
  return {
    type: SET_OLDER_EMPLOYMENT_HISTORY,
    details
  }
}

export function fetchOlderEmploymentHistory(details) {
  return dispatch => {
    dispatch(setOlderEmploymentHistory(details))
    return null
  }
} 

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

