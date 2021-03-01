import { combineReducers } from 'redux'

import details from './details'
import education from './education'
import employmentHistory from './employmentHistory'
import oldEmploymentHistory from './oldEmploymentHistory'

export default combineReducers({
  details,
  education,
  employmentHistory,
  oldEmploymentHistory,
})
