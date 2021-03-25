const express = require('express')

const db = require('../db/details')

const router = express.Router()

router.get('/details/:id/:profile_name', (req, res) => {
  console.log('reabody', req.params)
  const id = req.params.id
  const profile_name = req.params.profile_name
  db.getUserDetails(id, profile_name)
    .then(response => {
      console.log('res', response)
      res.json(response)
    })
    .catch(() => res.sendStatus(500)) //without this, it will cause reject tests to fail!
})

router.get('/employmentHistory/:id/:profile_name', (req, res) => {
  const id = req.params.id
  const profile_name = req.params.profile_name
  db.getUserEmploymentHistory(id, profile_name)
    .then(response => {
      res.json(response)
    })
    .catch(() => res.sendStatus(500)) //without this, it will cause reject tests to fail!
})

router.get('/oldEmploymentHistory/:id/:profile_name', (req, res) => {
  console.log('hit')
  const id = req.params.id
  const profile_name = req.params.profile_name
  db.getUserOldEmploymentHistory(id, profile_name)
    .then(response => {
      console.log(response)
      res.json(response)
    })
    .catch(() => res.sendStatus(500)) //without this, it will cause reject tests to fail!
})

router.get('/education/:id/:profile_name', (req, res) => {
  const id = req.params.id
  const profile_name = req.params.profile_name
  db.getUserEducation(id, profile_name)
    .then(response => {
      res.json(response)
    })
    .catch((error) => {
      console.log(error)
      res.sendStatus(500)
    })
})

//test route for returning data to the final view
router.get('/education', (req, res) => {
  db.getEducation()
    .then(response => {
      return res.json(response)
    })
    .catch((error) => {
      console.log(error)
      res.sendStatus(500)
    })
})
//////////////////////////////////////////////////

router.post('/employmentHistory', async (req, res) => {
  const { employmentHistory, user_id, profile_name } = req.body
  console.log(employmentHistory)
  try {
    const arrayOfResponse = new Array
    const responseData = employmentHistory.map(async history => {
      return await db.saveEmploymentHistory(history, user_id, profile_name)
    })

    for await (let element of responseData) {
      arrayOfResponse.push(element[0])
    }
    res.status(201).json(arrayOfResponse)
  }
  catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
})

router.post('/oldEmploymentHistory', async (req, res) => {
  const { oldEmploymentHistory, user_id, profile_name } = req.body

  try {
    const arrayOfResponse = new Array
    const responseData = oldEmploymentHistory.map(async history => {
      const response = await db.saveOldEmploymentHistory(history, user_id, profile_name)
      return response
    })

    for await (let el of responseData) {
      arrayOfResponse.push(el[0])
    }
    res.status(201).json(arrayOfResponse)
  }
  catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
})


router.post('/education', async (req, res) => {
  const { education, user_id, profile_name } = req.body

  try {
    const arrayOfResponse = new Array;
    const responseData = education.map(async data => {
      const response = await db.saveEducationHistory(data, user_id, profile_name)
      return response
    })

    for await (let el of responseData) {
      arrayOfResponse.push(el[0])
    }
    res.status(201).json(arrayOfResponse)
  }
  catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
})

router.post('/details', async (req, res) => {
  console.log('reqbody:', req.body)
  try {
    const { details, user_id, profile_name } = req.body
    const response = await db.saveDetails(details, user_id, profile_name)
    res.status(201).json(response) //json(details) is required to make the result readable for jest testing
    return null
  }
  catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
})

router.get('/profiles/:id', (req, res) => {
  const id = req.params.id
  db.getProfiles(id)
    .then(response => {
      return res.json(response)
    })
    .catch((error) => {
      console.log(error)
      res.sendStatus(500)
    })
})

module.exports = router