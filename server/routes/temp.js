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
