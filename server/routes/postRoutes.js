const express = require('express')

const db = require('../db/dbFunctions')

const router = express.Router()

router.post('/employmentHistory', async (req, res) => {
  const { employmentHistory, userId, profileName } = req.body
  console.log(employmentHistory)
  try {
    const arrayOfResponse = []
    const responseData = employmentHistory.map(async history => {
      return await db.saveEmploymentHistory(history, userId, profileName)
    })
    for await (const element of responseData) {
      arrayOfResponse.push(element[0])
    }
    return res.status(201).json(arrayOfResponse)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
})

router.post('/oldEmploymentHistory', async (req, res) => {
  const { oldEmploymentHistory, userId, profileName } = req.body
  try {
    const arrayOfResponse = []
    const responseData = oldEmploymentHistory.map(async history => {
      const response = await db.saveOldEmploymentHistory(history, userId, profileName)
      return response
    })
    for await (const el of responseData) {
      arrayOfResponse.push(el[0])
    }
    res.status(201).json(arrayOfResponse)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/socials', async (req, res) => {
  const { socials, userId, profileName } = req.body
  try {
    const arrayOfResponse = []
    const responseData = socials.map(async social => {
      const response = await db.saveSocials(social, userId, profileName)
      return response
    })
    for await (const el of responseData) {
      arrayOfResponse.push(el[0])
    }
    res.status(201).json(arrayOfResponse)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/skills', async (req, res) => {
  const { skills, userId, profileName } = req.body
  try {
    const arrayOfResponse = []
    const responseData = skills.map(async skill => {
      const response = await db.saveSkills(skill, userId, profileName)
      return response
    })
    for await (const el of responseData) {
      arrayOfResponse.push(el[0])
    }
    res.status(201).json(arrayOfResponse)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/educations', async (req, res) => {
  const { education, userId, profileName } = req.body
  try {
    const arrayOfResponse = []
    const responseData = education.map(async data => {
      const response = await db.saveEducationHistory(data, userId, profileName)
      return response
    })
    for await (const el of responseData) {
      arrayOfResponse.push(el[0])
    }
    res.status(201).json(arrayOfResponse)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/profile', async (req, res) => {
  try {
    const { profile, userId, profileName } = req.body
    const response = await db.saveProfile(profile, userId, profileName)
    res.status(201).json(response) // json(details) is required to make the result readable for jest testing
    return null
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = router
