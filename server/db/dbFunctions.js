const connection = require('./connection')

//POST

function saveProfile({ firstName, lastName, phone, email, location, profileIntro }, userId, profileName, db = connection) {
  return db('profile')
    .insert({ userId, profileName, firstName, lastName, phone, email, location, profileIntro })
}

function uploadImage({ name, data }, userId, profileName, db = connection) {

  return db('profileImage')
    .insert({ name, image: data, userId, profileName })
}

function saveSocials({ network, link }, userId, profileName, db = connection) {
  return db('socials')
    .insert({ network, link, userId, profileName })
}

function saveSkills({ skill }, userId, profileName, db = connection) {
  return db('skills')
    .insert({ skill, userId, profileName })
}

function saveEmploymentHistory({ employer, employmentDateStart, employmentDateEnd, role, details }, userId, profileName, db = connection) {
  return db('employment_history')
    .insert({ userId, profileName, employer, employmentDateStart, employmentDateEnd, role, details })
}

function saveOldEmploymentHistory({ oldEmployer, oldEmploymentDateStart, oldEmploymentDateEnd, oldRole }, userId, profileName, db = connection) {
  return db('old_employment_history')
    .insert({ userId, profileName, oldEmployer, oldEmploymentDateStart, oldEmploymentDateEnd, oldRole })
}

function saveEducationHistory({ provider, qualification, yearStart, yearEnd }, userId, profileName, db = connection) {
  return db('educations')
    .insert({ userId, profileName, provider, qualification, yearStart, yearEnd })
}

//GET
function getUserProfile(userId, profileName, db = connection) {
  return db('profile')
    .where({ userId: userId, profileName: profileName })
    .select('userId', 'firstName', 'lastName', 'phone', 'email', 'profileIntro', 'location', 'profileName')
}

function getImage(userId, profileName, db = connection) {
  return db('profileImage')
    .where({ userId: userId, profileName: profileName }).first()
    .select('image', 'name', 'userId', 'profileName')
}

function getUserSocials(id, profileName, db = connection) {
  return db('socials')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'profileName', 'network', 'link')
}

function getUserSkills(id, profileName, db = connection) {
  return db('skills')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'profileName', 'skill')
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
  return db('educations')
    .where({ userId: id, profileName: profileName })
    .select('userId', 'profileName', 'provider', 'qualification', 'yearStart', 'yearEnd')
}

function getProfiles(id, db = connection) {
  return db('profile')
    .where({ userId: id })
    .select()
}

module.exports = {
  uploadImage,
  getImage,
  getUserProfile,
  getUserSocials,
  getUserSkills,
  getUserEmploymentHistory,
  getUserOldEmploymentHistory,
  getUserEducation,
  getProfiles,
  saveProfile,
  saveSocials,
  saveSkills,
  saveEmploymentHistory,
  saveOldEmploymentHistory,
  saveEducationHistory,
}