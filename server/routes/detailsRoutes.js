const express = require('express')

const db = require('../db/details')

const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getUserDetails(id)
    .then(response => {
      res.json(response)
    })
    .catch(() => res.sendStatus(500)) //without this, it will cause reject tests to fail!
})

router.get('/history/:id', (req, res) => {
  const id = req.params.id
  db.getUserEmploymentHistory(id)
    .then(response => {
      res.json(response)
    })
    .catch(() => res.sendStatus(500)) //without this, it will cause reject tests to fail!
})

router.get('/oldHistory/:id', (req, res) => {
  const id = req.params.id
  db.getUserOldEmploymentHistory(id)
    .then(response => {
      res.json(response)
    })
    .catch(() => res.sendStatus(500)) //without this, it will cause reject tests to fail!
})

router.get('/education/:id', (req, res) => {
  const id = req.params.id
  db.getUserEducation(id)
    .then(response => {
      res.json(response)
    })
    .catch(() => res.sendStatus(500))
})

router.post('/employment', async (req, res) => {
  const { employmentHistory, user_id } = req.body

  try {
    const arrayOfResponse = []
    const responseData = employmentHistory.map(async history => {
      const response = await db.saveEmploymentHistory(history, user_id)
      return response
    })
    for await (let req of responseData) {
      arrayOfResponse.push(req[0])
    }
    res.status(201).json(arrayOfResponse)
  }
  catch (error) {
    res.sendStatus(500)
    console.log(error)
  }

})










/// old
router.post('/', (req, res) => {
  const { name, phone, email, profile_intro } = req.body
  db.saveDetails(name, phone, email, profile_intro)
    .then(details => {
      res.status(201).json(details) //json(details) is required to make the result readable for jest testing
      return null
    })
    .catch(() => res.sendStatus(500))
})

router.post('/history', (req, res) => {
  const { employer, employmentDate, role, details } = req.body
  db.saveEmploymentHistory(employer, employmentDate, role, details)
    .then(history => {
      res.status(201).json(history)
      return null
    })
    .catch(() => res.sendStatus(500))
})

router.post('/oldHistory', (req, res) => {
  const { oldEmployer, oldEmploymentDate, oldRole } = req.body
  db.saveOldEmploymentHistory(oldEmployer, oldEmploymentDate, oldRole)
    .then(oldHistory => {
      res.status(201).json(oldHistory)
    })
    .catch(() => res.sendStatus(500))
})

router.post('/education', (req, res) => {
  const { provider, qualification, year } = req.body
  db.saveEducationHistory(provider, qualification, year)
    .then(education => {
      res.status(201).json(education)
    })
    .catch(() => res.sendStatus(500))
})


module.exports = router