import request from 'superagent'

const rootUrl = '/api/v1'

// GET
export function getProfiles(userId) {
  return request
    .get(`${rootUrl}/get/profiles/${userId}`)
    .then(res => {
      return res.body
    })
}

export function getSavedData(userId, profileName) {
  const formData = {
    details: [],
    employmentHistory: [],
    oldEmploymentHistory: [],
    education: []
  }

  const retrievedData = Object.keys(formData).map(key => {
    return retrieveSavedData(key, formData, userId, profileName)
  })

  return Promise.all(retrievedData).then(res => {
    return res[0]
  })
}

function retrieveSavedData(key, formData, userId, profileName) {
  return request
    .get(`${rootUrl}/get/${key}/${userId}/${profileName}`)
    .then(res => {
      formData[key] = res.body
      return formData
    })
}

// POST
export function postFormDataToDatabase(formData) {
  const { profileName, userId } = formData
  for (const [key, value] of Object.entries(formData)) {
    if (key !== 'userId' && key !== 'profileName') { sendData(key, value, userId, profileName) }
  }
}

function sendData(key, value, userId, profileName) {
  return request
    .post(`${rootUrl}/post/${key}`)
    .send({ [key]: value, userId, profileName })
    .then(res => {
      return res.body
    })
}
