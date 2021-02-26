const express = require('express')

const db = require('../db/details')

const router = express.Router()

router.get('/', (req, res) => {
  db.getDetails()
    .then(response => {
      res.json(response)
    })
    .catch(() => res.sendStatus(500)) //without this, it will cause reject tests to fail!
})

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