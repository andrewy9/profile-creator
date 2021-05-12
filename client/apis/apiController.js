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

export function getImage(userId, profileName) {
  return request
    .get(`${rootUrl}/get/profileImage/${userId}/${profileName}`)
    .then(res => {
      return res.body
    })
}

export function getSavedData(userId, profileName) {
  const formData = {
    profile: [],
    socials: [],
    skills: [],
    employmentHistory: [],
    oldEmploymentHistory: [],
    educations: [],
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

export function getPublicUrlParam(userId, profileName) {
  return request
    .get(`${rootUrl}/get/publicUrlParams/${userId}/${profileName}`)
    .then(res => res.body)
    .catch(error => console.log(error))
}

//POST
export function postFormDataToDatabase(formData) {
  const { profileName, userId } = formData
  for (const [key, value] of Object.entries(formData)) {
    if (key !== 'userId' && key !== 'profileName') {
      sendData(key, value, userId, profileName)
    }
  }
}

function sendData(key, value, userId, profileName) {
  return request
    .post(`${rootUrl}/post/${key}`)
    .send({ [key]: value, userId, profileName })
    .then(res => {
      return res.body
    })
    .catch(err => console.log(err))
}

export function postImage(file) {
  return request
    .post(`${rootUrl}/post/profileImage`)
    .send(file)
    .then(res => {
      return res.body
    })
    .catch(e => null)
}

export function postPublicUrlParams(userId, profileName) {
  console.log(userId, profileName)
  return request
    .post(`${rootUrl}/post/publicUrlParams`)
    .send({ userId, profileName })
    .then(res => {
      return res.body
    })
    .catch(e => null)
}