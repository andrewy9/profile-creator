import request from 'superagent'

const rootUrl = '/api/v1'

export function postFormDataToDatabase(formData) {
  const { employmentHistory, oldEmploymentHistory, education, user_id, ...details } = formData
  sendEmploymentHistory(employmentHistory, user_id)
  sendOldEmploymentHistory(oldEmploymentHistory, user_id)
  postEducationHistoryToDatabase(education, user_id)
  postDetailsToDatabase(details, user_id)
}

export function sendEmploymentHistory(employmentHistory, user_id) {
  return request
    .post(`${rootUrl}/detailsRoutes/employment`)
    .send({ employmentHistory, user_id })
    .then(res => {
      return res.body
    })
}

export function sendOldEmploymentHistory(oldEmploymentHistory, user_id) {
  return request
    .post(`${rootUrl}/detailsRoutes/oldEmployment`)
    .send({ oldEmploymentHistory, user_id })
    .then(res => {
      return res.body
    })
}

export function postEducationHistoryToDatabase(education, user_id) {
  return request
    .post(`${rootUrl}/detailsRoutes/education`)
    .send({ education, user_id })
    .then(res => {
      return res.body
    })
}

export function postDetailsToDatabase(details, user_id) {
  return request
    .post(`${rootUrl}/detailsRoutes`)
    .send({ details, user_id })
    .then(res => {
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