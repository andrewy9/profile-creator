import { setReducer } from './index'

export const APPEND_SOCIAL = 'APPEND_SOCIAL'
export const UPDATE_SOCIAL = 'UPDATE_SOCIAL'
export const REMOVE_SOCIAL = 'REMOVE_SOCIAL'

export function appendSocial(newSocial) {
  return dispatch => {
    dispatch(setReducer(newSocial, APPEND_SOCIAL))
  }
}

export function updateSocial(updatedSocial) {
  return dispatch => {
    dispatch(setReducer(updatedSocial, UPDATE_SOCIAL))
  }
}

export function removeSocial(social) {
  return dispatch => {
    dispatch(setReducer(social, REMOVE_SOCIAL))
  }
}