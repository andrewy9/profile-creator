const connection = require('./connection')

function saveDetails(name, phone, email, profile_intro, db = connection) {
  return db('details')
    .insert({ name, phone, email, profile_intro })
}

function getDetails(details, db = connection) {
  return db('details').select()
}

function saveEmploymentHistory(employer, employmentDate, role, details, db = connection) {
  return db('employment_history')
    .insert({ employer, employmentDate, role, details })
}

function saveOldEmploymentHistory(oldEmployer, oldEmploymentDate, oldRole, db = connection) {
  return db('old_employment_history')
    .insert({ oldEmployer, oldEmploymentDate, oldRole })
}

function saveEducationHistory(provider, qualification, year, db = connection) {
  return db('education')
    .insert({ provider, qualification, year })
}

module.exports = {
  saveDetails,
  getDetails,
  saveEmploymentHistory,
  saveOldEmploymentHistory,
  saveEducationHistory
}