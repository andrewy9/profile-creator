const connection = require('./connection')


function saveDetails(name, phone, email, profile_intro, db = connection) {
  return db('details')
    .insert({ name, phone, email, profile_intro })
}

function getDetails(db = connection) {
  return db('details').select()
}

function saveEmploymentHistory({ employer, employmentDate, role, details }, user_id, db = connection) {
  return db('employment_history')
    .insert({ user_id, employer, employmentDate, role, details })
}

function saveOldEmploymentHistory(oldEmployer, oldEmploymentDate, oldRole, user_id, db = connection) {
  return db('old_employment_history')
    .insert({ user_id, oldEmployer, oldEmploymentDate, oldRole })
}

function saveEducationHistory(provider, qualification, year, db = connection) {
  return db('education')
    .insert({ provider, qualification, year })
}

//------next test starts here
//one user can have multiple details for different cvs
function getUserDetails(id, db = connection) {
  return db('users')
    .join('details', 'users.id', 'details.user_id')
    .where({ 'users.id': id })
    .select('user_id', 'name', 'phone', 'email', 'profile_intro')
}

function getUserEmploymentHistory(id, db = connection) {
  return db('users')
    .join('employment_history', 'users.id', 'employment_history.user_id')
    .where({ 'users.id': id })
    .select()
}

function getUserOldEmploymentHistory(id, db = connection) {
  return db('users')
    .join('old_employment_history', 'users.id', 'old_employment_history.user_id')
    .where({ 'users.id': id })
    .select()
}

function getUserEducation(id, db = connection) {
  return db('users')
    .join('education', 'users.id', 'education.user_id')
    .where({ 'users.id': id })
    .select()
}

module.exports = {
  saveDetails,
  getDetails,
  saveEmploymentHistory,
  saveOldEmploymentHistory,
  saveEducationHistory,
  getUserDetails,
  getUserEmploymentHistory,
  getUserOldEmploymentHistory,
  getUserEducation
}