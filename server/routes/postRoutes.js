// const express = require('express')

// const db = require('../db/dbFunctions')

// const router = express.Router()

// router.post('/employmentHistory', async (req, res) => {
//   const { employmentHistory, userId, profileName } = req.body
//   try {
//     const arrayOfResponse = []
//     const responseData = employmentHistory.map(async history => {
//       return await db.saveEmploymentHistory(history, userId, profileName)
//     })
//     for await (const element of responseData) {
//       arrayOfResponse.push(element[0])
//     }
//     return res.status(201).json(arrayOfResponse)
//   } catch (error) {
//     return res.sendStatus(500)
//   }
// })

// router.post('/oldEmploymentHistory', async (req, res) => {
//   const { oldEmploymentHistory, userId, profileName } = req.body
//   try {
//     const arrayOfResponse = []
//     const responseData = oldEmploymentHistory.map(async history => {
//       const response = await db.saveOldEmploymentHistory(history, userId, profileName)
//       return response
//     })
//     for await (const el of responseData) {
//       arrayOfResponse.push(el[0])
//     }
//     res.status(201).json(arrayOfResponse)
//   } catch (error) {
//     res.sendStatus(500)
//   }
// })

// router.post('/education', async (req, res) => {
//   const { education, userId, profileName } = req.body
//   try {
//     const arrayOfResponse = []
//     const responseData = education.map(async data => {
//       const response = await db.saveEducationHistory(data, userId, profileName)
//       return response
//     })
//     for await (const el of responseData) {
//       arrayOfResponse.push(el[0])
//     }
//     res.status(201).json(arrayOfResponse)
//   } catch (error) {
//     res.sendStatus(500)
//   }
// })

// router.post('/details', async (req, res) => {
//   try {
//     const { details, userId, profileName } = req.body
//     const response = await db.saveDetails(details, userId, profileName)
//     res.status(201).json(response) // json(details) is required to make the result readable for jest testing
//     return null
//   } catch (error) {
//     res.sendStatus(500)
//   }
// })

// router.get('/profiles/:id', (req, res) => {
//   const id = req.params.id
//   db.getProfiles(id)
//     .then(response => {
//       return res.json(response)
//     })
//     .catch(() => res.sendStatus(500))
// })

// module.exports = router
