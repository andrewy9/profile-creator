const connection = require('./connection')

function saveDetails ( details, db=connection ) {
  console.log('hiiiiiiiiiiiiiii')
  return db('details').insert(details)
}

function getDetails (details, db = connection) {
  console.log('hiiiiiiiiiiiiiii')
  return db('details').select()
}





module.exports = {
  saveDetails,
  getDetails
}