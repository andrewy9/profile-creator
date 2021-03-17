import request from 'superagent'
// import {addBasicDetails} from '../actions'

const rootUrl = '/api/v1'

export function postFormDataToDatabase(formData) {
  const { user_id } = formData
  for (const [key, value] of Object.entries(formData)) {
    console.log(value, typeof value)
    if (key === 'employmentHistory' || key === 'oldEmploymentHistory')
      sendData(key, value, user_id)
  }
}

export function sendData(key, value, user_id) {
  console.log(value, typeof value)

  return typeof value === 'object' ?
    value.forEach(el => {
      return request
        .post(`${rootUrl}/detailsRoutes/${key}`)
        .send({ [key]: el, user_id })
        .then(res => {
          console.log('api response - ', res)
          return res.body
        })
    })
    : request
      .post(`${rootUrl}/detailsRoutes/${key}`)
      .send({ [key]: value, user_id })
      .then(res => {
        console.log('api response - ', res)
        return res.body
      })
}

// export function postDetailsToDatabase(details) {
//   //console.log('api launched: ', details)
//   return request
//     .post(`${rootUrl}/detailsRoutes`)
//     .send(details)
//     .then(res => {
//       return res.body
//     })
// }

// export function postEmploymentHistoryToDatabase(history) {
//   //console.log('api hittin')
//   return request
//     .post(`${rootUrl}/detailsRoutes/history`)
//     .send(history)
//     .then(res => {
//       return res.body
//     })
// }

// export function postOldEmploymentHistoryToDatabase(oldHistory) {
//   return request
//     .post(`${rootUrl}/detailsRoutes/oldHistory`)
//     .send(oldHistory)
//     .then(res => {
//       return res.body
//     })
// }

// export function postEducationHistoryToDatabase(education) {
//   return request
//     .post(`${rootUrl}/detailsRoutes/education`)
//     .send(education)
//     .then(res => {
//       return res.body
//     })
// }

export function getDetails() {
  return request
    .get(`${rootUrl}/detailsRoutes`)
    .then(res => {
      return res.body
    })
}