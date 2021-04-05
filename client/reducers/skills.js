import { APPEND_SKILL, UPDATE_SKILL, REMOVE_SKILL } from '../actions/skills'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_SKILL:
      return [...state, action.payload]

    case UPDATE_SKILL:
      let { id, name, value } = action.payload
      const newState = [...state]
      newState[id][name] = value
      return newState

    case REMOVE_SKILL:
      return state.filter((skills, idx) => idx !== action.payload)

    default:
      return state
  }
}

export default reducer