export const SET_PROFILE = 'SET_PROFILE'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const UPDATE_PROFILE_LIST = 'ADD_PROFILE_LIST'
export const ADD_PICTURE = 'ADD_PICTURE'

// SetReducer
export function setReducer(payload, type) {
  return {
    type,
    payload
  }
}

export function updateProfile(profile) {
  return dispatch => {
    dispatch(setReducer(profile, SET_PROFILE))
    return null
  }
}

export function addPicture(picture) {
  return dispatch => {
    dispatch(setReducer(picture, ADD_PICTURE))
    return null
  }
}

// User
export function logIn(user) {
  return dispatch => {
    dispatch(setReducer(user, LOG_IN))
  }
}

export function logOut(user) {
  return dispatch => {
    dispatch(setReducer(user, LOG_OUT))
  }
}

export function updateProfileList(userProfiles) {
  return dispatch => {
    dispatch(setReducer(userProfiles, UPDATE_PROFILE_LIST))
  }
}