const express = require('express')
const db = require('../db/dbFunctions')
const router = express.Router()

//for the final view
router.get('/profile/:id/:profileName', (req, res) => {
  const id = req.params.id
  const profileName = req.params.profileName
  db.getUserProfile(id, profileName)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500)) // without this, it will cause reject tests to fail!
})

router.get('/socials/:id/:profileName', (req, res) => {
  const id = req.params.id
  const profileName = req.params.profileName
  db.getUserSocials(id, profileName)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500))
})

router.get('/skills/:id/:profileName', (req, res) => {
  const id = req.params.id
  const profileName = req.params.profileName
  db.getUserSkills(id, profileName)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500))
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

router.get('/educations/:id/:profileName', (req, res) => {
  const id = req.params.id
  const profileName = req.params.profileName
  db.getUserEducation(id, profileName)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500))
})

//for the nav bar - get a list of profiles or a user
router.get('/profiles/:id', (req, res) => {
  const id = req.params.id
  db.getProfiles(id)
    .then(response => {
      return res.json(response)
    })
    .catch(() => res.sendStatus(500))
})

router.get('/publicUrl', (req, res) => {
  db.getPublicUrls()
})

router.get('/profileImage/:id/:profileName', (req, res) => {
  const userId = req.params.id
  const profileName = req.params.profileName
  db.getImage(userId, profileName)
    .then(response => {
      return res.send(response)
    })
    .catch(() => res.sendStatus(500))
})


module.exports = router
