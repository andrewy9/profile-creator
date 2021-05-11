import { LOG_OUT } from '../actions'
import { APPEND_EDUCATION, UPDATE_EDUCATION, REMOVE_EDUCATION } from '../actions/educations'

const initialState = {
  education: [{
    provider: '',
    qualification: '',
    yearStart: '',
    yearEnd: ''
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_EDUCATION:
      return { ...state, education: [...state.education, action.payload] }
    //done!

    case UPDATE_EDUCATION:
      let { id, name, value } = action.payload
      const newState = [...state.education]
      newState[id][name] = value
      return { ...state, education: newState }


    case REMOVE_EDUCATION:
      const filteredEducation = state.education.filter((education, idx) => idx !== action.payload)
      return { ...state, education: filteredEducation }

    case LOG_OUT:
      return {
        education: [{
          provider: '',
          qualification: '',
          yearStart: '',
          yearEnd: ''
        }]
      };

    default:
      return state
  }
}

export default reducer
