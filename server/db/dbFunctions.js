const connection = require('./connection')

//POST

function saveDetails({ firstName, lastName, phone, email, profileIntro }, userId, profileName, db = connection) {
  return db('details')
    .insert({ userId, profileName, firstName, lastName, phone, email, profileIntro })
}

function saveEmploymentHistory({ employer, employmentDateStart, employmentDateEnd, role, details }, userId, profileName, db = connection) {
  return db('employment_history')
    .insert({ userId, profileName, employer,employmentDateStart, employmentDateEnd, role, details })
}

function saveOldEmploymentHistory({ oldEmployer, oldEmploymentDateStart, oldEmploymentDateEnd, oldRole }, userId, profileName, db = connection) {
  return db('old_employment_history')
    .insert({ userId, profileName, oldEmployer, oldEmploymentDateStart, oldEmploymentDateEnd, oldRole })
}

function saveEducationHistory({ provider, qualification, year }, userId, profileName, db = connection) {
  return db('education')
    .insert({ userId, profileName, provider, qualification, year })
}

//GET
function getUserDetails(id, profileName, db = connection) {
  return db('details')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'firstName', 'lastName', 'phone', 'email', 'profileIntro', 'profileName')
}

function getUserEmploymentHistory(id, profileName, db = connection) {
  return db('employment_history')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'profileName', 'employer', 'employmentDateStart', 'employmentDateEnd', 'role', 'details')
}

function getUserOldEmploymentHistory(id, profileName, db = connection) {
  return db('old_employment_history')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'profileName', 'oldEmployer', 'oldEmploymentDateStart', 'oldEmploymentDateEnd', 'oldRole')
}

function getUserEducation(id, profileName, db = connection) {
  return db('education')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'profileName', 'provider', 'qualification', 'year')
}

function getProfiles(id, db = connection) {
  return db('details')
    .where({ userId: id })
    .select()
}

module.exports = {
  getUserDetails,
  getUserEmploymentHistory,
  getUserOldEmploymentHistory,
  getUserEducation,
  saveDetails,
  saveEmploymentHistory,
  saveOldEmploymentHistory,
  saveEducationHistory,
  getProfiles
}
