const express = require('express')

const db = require('../db/dbFunctions')

const router = express.Router()

router.get('/details/:id/:profileName', (req, res) => {
  const id = req.params.id
  const profileName = req.params.profileName
  db.getUserDetails(id, profileName)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500)) // without this, it will cause reject tests to fail!
})

router.get('/employmentHistory/:id/:profileName', (req, res) => {
  const id = req.params.id
  const profileName = req.params.profileName
  db.getUserEmploymentHistory(id, profileName)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500)) // without this, it will cause reject tests to fail!
})

router.get('/oldEmploymentHistory/:id/:profileName', (req, res) => {
  const id = req.params.id
  const profileName = req.params.profileName
  db.getUserOldEmploymentHistory(id, profileName)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500)) // without this, it will cause reject tests to fail!
})

router.get('/education/:id/:profileName', (req, res) => {
  const id = req.params.id
  const profileName = req.params.profileName
  db.getUserEducation(id, profileName)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500))
})

router.get('/profiles/:id', (req, res) => {
  const id = req.params.id
  db.getProfiles(id)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500))
})

module.exports = router
