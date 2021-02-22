const express = require('express')

const db = require('../db/details')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('hitting get???')
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
      console.log('details route,', details)
      res.status(201)
    })
})

module.exports = router