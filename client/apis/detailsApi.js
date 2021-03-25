import request from 'superagent'

const rootUrl = '/api/v1'

export function postFormDataToDatabase(formData) {
  const { profile_name, user_id } = formData
  for (const [key, value] of Object.entries(formData)) {
    if (key !== 'user_id' && key !== 'profile_name')
      sendData(key, value, user_id, profile_name)
  }
}

function sendData(key, value, user_id, profile_name) {
  return request
    .post(`${rootUrl}/detailsRoutes/${key}`)
    .send({ [key]: value, user_id, profile_name })
    .then(res => {
      return res.body
    })
}

export function getSavedData(user_id, profile_name) {
  console.log('api arguments:', user_id, profile_name)
  const formData = {
    details: [],
    employmentHistory: [],
    oldEmploymentHistory: [],
    education: []
  }

  const retrievedData = Object.keys(formData).map(key => {
    return retrieveSavedData(key, formData, user_id, profile_name)
  })

  return Promise.all(retrievedData).then(res => {
    console.log(res[0])
    return res[0]
  })
}

function retrieveSavedData(key, formData, user_id, profile_name) {
  return request
    .get(`${rootUrl}/detailsRoutes/${key}/${user_id}/${profile_name}`)
    .then(res => {
      formData[key] = res.body
      console.log('formData', formData)
      return formData
    })
}

export function getProfiles(userId) {
  return request
    .get(`${rootUrl}/detailsRoutes/profiles/${userId}`)
    .then(res => {
      console.log(res.body)
      return res.body})
}