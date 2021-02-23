const express = require('express')

const db = require('../db/details')

const router = express.Router()

router.get('/', (req, res) => {
  db.getDetails()
    .then(response => {
      res.json(response)
    })
})

router.post('/', (req, res) => {
  console.log('hitting post?')
  const { name, phone, email, profile_intro } = req.body
  db.saveDetails(name, phone, email, profile_intro)
    .then(details => {
      res.status(201)
    })
})

router.post('/history', (req, res) => {
  const { employer, employmentDate, role, details } = req.body
  db.saveEmploymentHistory(employer, employmentDate, role, details)
    .then(history => {
      res.status(201)
    })
})

router.post('/oldHistory', (req, res) => {
  const { oldEmployer, oldEmploymentDate, oldRole } = req.body
  db.saveOldEmploymentHistory(oldEmployer, oldEmploymentDate, oldRole)
    .then(oldHistory => {
      res.status(201)
    })
})

router.post('/education', (req, res) => {
  const { provider, qualification, year } = req.body
  db.saveEducationHistory(provider, qualification, year)
    .then(education => {
      res.status(201)
    })
})


module.exports = router