import { LOG_OUT } from '../actions'
import { APPEND_SKILL, UPDATE_SKILL, REMOVE_SKILL } from '../actions/skills'

const initialState = { skill: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_SKILL:
      return { ...state, skill: [...state.skill, action.payload] }

    case UPDATE_SKILL:
      let { id, name, value } = action.payload
      const newState = [...state.skill]
      newState[id][name] = value
      return { ...state, skill: newState }

    case REMOVE_SKILL:
      const filteredSkills = state.skill.filter((skills, idx) => idx !== action.payload)
      return { ...state, skill: filteredSkills }

    case LOG_OUT:
      return { skill: [] }

    default:
      return state
  }
}

export default reducer