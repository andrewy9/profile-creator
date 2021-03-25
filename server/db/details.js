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
  return db('users')
    .join('details', 'users.id', 'details.user_id')
    .where({ 'users.id': id, 'details.profile_name': profile_name })
    .select('user_id', 'name', 'phone', 'email', 'profile_intro', 'profile_name')
}

function getUserEmploymentHistory(id, profile_name, db = connection) {
  return db('users')
    .join('employment_history', 'users.id', 'employment_history.user_id')
    .where({ 'users.id': id, 'employment_history.profile_name': profile_name })
    .select('user_id', 'profile_name', 'employer', 'employmentDate', 'role', 'details')
}

function getUserOldEmploymentHistory(id, profile_name, db = connection) {
  return db('users')
    .join('old_employment_history', 'users.id', 'old_employment_history.user_id')
    .where({ 'users.id': id, 'old_employment_history.profile_name': profile_name })
    .select('user_id', 'profile_name', 'oldEmployer', 'oldEmploymentDate', 'oldRole')
}

function getUserEducation(id, profile_name, db = connection) {
  return db('users')
    .join('education', 'users.id', 'education.user_id')
    .where({ 'users.id': id, 'education.profile_name': profile_name })
    .select('user_id', 'profile_name', 'provider', 'qualification', 'year')
}

function getEducation(db = connection) {
  return db('education')
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
  getEducation
}