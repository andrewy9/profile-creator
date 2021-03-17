import request from 'superagent'
// import {addBasicDetails} from '../actions'

const rootUrl = '/api/v1'

export function postFormDataToDatabase(formData) {
  const { employmentHistory, oldEmploymentHistory, education, user_id } = formData
  sendEmploymentHistory(employmentHistory, user_id)
  sendOldEmploymentHistory(oldEmploymentHistory, user_id)
}

export function sendEmploymentHistory(employmentHistory, user_id) {
  employmentHistory.forEach(el => {
    return request
      .post(`${rootUrl}/detailsRoutes/employment`)
      .send({ employmentHistory: el, user_id })
      .then(res => {
        console.log('api response - ', res)
        return res.body
      })
  })
}

export function sendOldEmploymentHistory(oldEmploymentHistory, user_id) {
  oldEmploymentHistory.forEach(el => {
    return request
      .post(`${rootUrl}/detailsRoutes/oldEmployment`)
      .send({ oldEmploymentHistory: el, user_id })
      .then(res => {
        console.log('api response - ', res)
        return res.body
      })
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