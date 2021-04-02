import { setReducer } from './index'

export const APPEND_EDUCATION = 'APPEND_EDUCATION'
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION'
export const REMOVE_EDUCATION = 'REMOVE_EDUCATION'

export function appendEducation(newEducation) {
  return dispatch => {
    dispatch(setReducer(newEducation, APPEND_EDUCATION))
  }
}

export function updateEducation(updatedEducation) {
  return dispatch => {
    dispatch(setReducer(updatedEducation, UPDATE_EDUCATION))
  }
}

export function removeEducation(removedEducation) {
  return dispatch => {
    dispatch(setReducer(removedEducation, REMOVE_EDUCATION))
  }
}