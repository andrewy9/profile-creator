import { setReducer } from './index'

export const APPEND_OLD_EMPLOYMENT_HISTORY = 'APPEND_OLD_EMPLOYMENT_HISTORY'
export const UPDATE_OLD_EMPLOYMENT_HISTORY = 'UPDATE_OLD_EMPLOYMENT_HISTORY'
export const REMOVE_OLD_EMPLOYMENT_HISTORY = 'REMOVE_OLD_EMPLOYMENT_HISTORY'

export function appendOldEmploymentHistory(newOldEmploymentHistory) {
  return dispatch => {
    dispatch(setReducer(newOldEmploymentHistory, APPEND_OLD_EMPLOYMENT_HISTORY))
  }
}

export function updateOldEmploymentHistory(updatedOldEmploymentHistory) {
  return dispatch => {
    dispatch(setReducer(updatedOldEmploymentHistory, UPDATE_OLD_EMPLOYMENT_HISTORY))
  }
}

export function removeOldEmploymentHistory(removedOldEmploymentHistory) {
  return dispatch => {
    dispatch(setReducer(removedOldEmploymentHistory, REMOVE_OLD_EMPLOYMENT_HISTORY))
  }
}