const connection = require('./connection')

function saveDetails(name, phone, email, profile_intro, db = connection) {
  console.log('hiiiiiiiiiiiiiii')
  return db('details')
    .insert({ name, phone, email, profile_intro })
}

function getDetails(details, db = connection) {
  console.log('htting post function?')
  return db('details').select()
}

module.exports = {
  saveDetails,
  getDetails
}