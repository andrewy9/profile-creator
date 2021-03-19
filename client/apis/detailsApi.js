import request from 'superagent'

const rootUrl = '/api/v1'

export function postFormDataToDatabase(formData) {
  const { profile_name, user_id } = formData
  console.log(profile_name)
  for (const [key, value] of Object.entries(formData)) {
    if (key !== 'user_id' && key !== 'profile_name')
      sendData(key, value, user_id, profile_name)
  }
}

export function sendData(key, value, user_id, profile_name) {
  console.log(key)
  return request
    .post(`${rootUrl}/detailsRoutes/${key}`)
    .send({ [key]: value, user_id, profile_name })
    .then(res => {
      // console.log('api response - ', res)
      return res.body
    })
}


export function getSavedData(user_id, profile_name) {
 const routes = [employment, old, education]

 routes.forEach(el => {
   return request
     .get(`${rootUrl}/detailsRoutes/${el}/${user_id}/${profile_name}`)
     .then(res => {
       console.log(res.body)
       return res.body
     })

 })
}