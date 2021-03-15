import request from 'superagent'
// import {addBasicDetails} from '../actions'

const rootUrl = '/api/v1'

export function postFormDataToDatabase(formData) {
  const { employmentHistory, oldEmploymentHistory, education, user_id } = formData
  console.log('emp history from detailsAPI', employmentHistory)
  return request
    .post(`${rootUrl}/detailsRoutes/formData`)
    .send({ employmentHistory, user_id })
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