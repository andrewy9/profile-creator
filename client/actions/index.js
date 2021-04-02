export const SET_PROFILE = 'SET_PROFILE'
export const SET_USER = 'SET_USER'

// SetReducer
export function setReducer(payload, type) {
  return {
    type,
    payload
  }
}

// BasicDetails
export function updateProfile(profile) {
  return dispatch => {
    dispatch(setReducer(profile, SET_PROFILE))
    return null
  }
}


// User
export function fetchUser(user) {
  return dispatch => {
    dispatch(setReducer(user, SET_USER))
  }
}

