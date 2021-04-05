import { setReducer } from './index'

export const APPEND_SKILL = 'APPEND_SKILL'
export const UPDATE_SKILL = 'UPDATE_SKILL'
export const REMOVE_SKILL = 'REMOVE_SKILL'

export function appendSkill(newSkills) {
  return dispatch => {
    dispatch(setReducer(newSkills, APPEND_SKILL))
  }
}

export function updateSkill(updatedSkills) {
  return dispatch => {
    dispatch(setReducer(updatedSkills, UPDATE_SKILL))
  }
}

export function removeSkill(removedSkills) {
  return dispatch => {
    dispatch(setReducer(removedSkills, REMOVE_SKILL))
  }
}