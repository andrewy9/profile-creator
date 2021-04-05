import { combineReducers } from 'redux'

import profile from './profile'
import socials from './socials'
import skills from './skills'
import educations from './education'
import employmentHistory from './employmentHistory'
import oldEmploymentHistory from './oldEmploymentHistory'
import user from './user'

export default combineReducers({
  profile,
  socials,
  skills,
  educations,
  employmentHistory,
  oldEmploymentHistory,
  user
})
