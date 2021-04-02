import { setReducer } from './index'

export const APPEND_EMPLOYMENT_HISTORY = 'APPEND_EMPLOYMENT_HISTORY'
export const UPDATE_EMPLOYMENT_HISTORY = 'UPDATE_EMPLOYMENT_HISTORY'
export const REMOVE_EMPLOYMENT_HISTORY = 'REMOVE_EMPLOYMENT_HISTORY'

export function appendEmploymentHistory(newEmploymentHistory) {
  return dispatch => {
    dispatch(setReducer(newEmploymentHistory, APPEND_EMPLOYMENT_HISTORY))
    return null
  }
}

export function updateEmploymentHistory(updatedEmploymentHistory) {
  return dispatch => {
    dispatch(setReducer(updatedEmploymentHistory, UPDATE_EMPLOYMENT_HISTORY))
    return null
  }
}

export function removeEmploymentHistory(removedEmploymentHistory) {
  return dispatch => {
    dispatch(setReducer(removedEmploymentHistory, REMOVE_EMPLOYMENT_HISTORY))
    return null
  }
}