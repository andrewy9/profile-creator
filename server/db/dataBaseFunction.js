const connection = require('./connection')

//POST

function saveDetails({ name, phone, email, profileIntro }, userId, profileName, db = connection) {
  return db('details')
    .insert({ userId, profileName, name, phone, email, profileIntro })
}

function saveEmploymentHistory({ employer, employmentDate, role, details }, userId, profileName, db = connection) {
  return db('employment_history')
    .insert({ userId, profileName, employer, employmentDate, role, details })
}

function saveOldEmploymentHistory({ oldEmployer, oldEmploymentDate, oldRole }, userId, profileName, db = connection) {
  return db('old_employment_history')
    .insert({ userId, profileName, oldEmployer, oldEmploymentDate, oldRole })
}

function saveEducationHistory({ provider, qualification, year }, userId, profileName, db = connection) {
  return db('education')
    .insert({ userId, profileName, provider, qualification, year })
}

//GET
function getUserDetails(id, profileName, db = connection) {
  return db('details')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'name', 'phone', 'email', 'profileIntro', 'profileName')
}

function getUserEmploymentHistory(id, profileName, db = connection) {
  return db('employment_history')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'profileName', 'employer', 'employmentDate', 'role', 'details')
}

function getUserOldEmploymentHistory(id, profileName, db = connection) {
  return db('old_employment_history')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'profileName', 'oldEmployer', 'oldEmploymentDate', 'oldRole')
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
