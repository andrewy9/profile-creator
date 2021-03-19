import request from 'superagent'

const rootUrl = '/api/v1'

export function postFormDataToDatabase(formData) {
  const { user_id } = formData
  for (const [key, value] of Object.entries(formData)) {
    if (key !== 'user_id')
      sendData(key, value, user_id)
  }
}

export function sendData(key, value, user_id) {
  return request
    .post(`${rootUrl}/detailsRoutes/${key}`)
    .send({ [key]: value, user_id })
    .then(res => {
      console.log('api response - ', res)
      return res.body
    })
}


export function getDetails() {
  return request
    .get(`${rootUrl}/detailsRoutes`)
    .then(res => {
      return res.body
    })
}