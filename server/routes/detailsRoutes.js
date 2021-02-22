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
  const details = req.body
  console.log(details)
  db.saveDetails(details)
    .then(details => {
      console.log('details route,', details)
      res.status(201).res.json(details)
    })
})

module.exports = router