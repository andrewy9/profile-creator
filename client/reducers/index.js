import { combineReducers } from 'redux'

import details from './details'
import education from './education'
import employmentHistory from './employmentHistory'
import oldEmploymentHistory from './oldEmploymentHistory'
import user from './user'

export default combineReducers({
  details,
  education,
  employmentHistory,
  oldEmploymentHistory,
  user
})
