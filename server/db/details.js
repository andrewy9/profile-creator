const connection = require('./connection')

//GET
function loadData() {
  return db('details')

}

function getDetails(db = connection) {
  return db('details').select()
}

//POST

function saveDetails({ name, phone, email, profile_intro }, user_id, profile_name, db = connection) {
  return db('details')
    .insert({ user_id, profile_name, name, phone, email, profile_intro })
}

function saveEmploymentHistory({ employer, employmentDate, role, details }, user_id, profile_name, db = connection) {
  return db('employment_history')
    .insert({ user_id, profile_name, employer, employmentDate, role, details })
}

function saveOldEmploymentHistory({ oldEmployer, oldEmploymentDate, oldRole }, user_id, profile_name, db = connection) {
  return db('old_employment_history')
    .insert({ user_id, profile_name, oldEmployer, oldEmploymentDate, oldRole })
}

function saveEducationHistory({ provider, qualification, year }, user_id, profile_name, db = connection) {
  return db('education')
    .insert({ user_id, profile_name, provider, qualification, year })
}

//------next test starts here
//one user can have multiple details for different cvs
function getUserDetails(id, profile_name, db = connection) {
  return db('details')
    .where({ 'users_id': id, 'profile_name': profile_name })
    .select('user_id', 'name', 'phone', 'email', 'profile_intro', 'profile_name')
}

function getUserEmploymentHistory(id, profile_name, db = connection) {
  return db('employmnet_history')
    .where({ 'user_id': id, 'profile_name': profile_name })
    .select('user_id', 'profile_name', 'employer', 'employmentDate', 'role', 'details')
}

function getUserOldEmploymentHistory(id, profile_name, db = connection) {
  return db('old_employment_history')
    .where({ 'user_id': id, 'profile_name': profile_name })
    .select('user_id', 'profile_name', 'oldEmployer', 'oldEmploymentDate', 'oldRole')
}

function getUserEducation(id, profile_name, db = connection) {
  return db('education')
    .where({ 'user_id': id, 'profile_name': profile_name })
    .select('user_id', 'profile_name', 'provider', 'qualification', 'year')
}

function getProfiles(id, db = connection) {
  return db('details')
  .where({'user_id': id})
  .select()
}

module.exports = {
  loadData,
  getUserDetails,
  getUserEmploymentHistory,
  getUserOldEmploymentHistory,
  getUserEducation,
  saveDetails,
  getDetails,
  saveEmploymentHistory,
  saveOldEmploymentHistory,
  saveEducationHistory,
  getProfiles
}