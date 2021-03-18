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
    const arrayOfResponse = new Array
    const responseData = employmentHistory.map(async history => {
      return await db.saveEmploymentHistory(history, user_id)
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

router.post('/oldEmployment', async (req, res) => {
  const { oldEmploymentHistory, user_id } = req.body

  try {
    const arrayOfResponse = new Array
    const responseData = oldEmploymentHistory.map(async history => {
      const response = await db.saveOldEmploymentHistory(history, user_id)
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
  const { education, user_id } = req.body

  try {
    const arrayOfResponse = new Array;
    const responseData = education.map(async data => {
      const response = await db.saveEducationHistory(data, user_id)
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

router.post('/', async (req, res) => {
  try {
    const { details, user_id } = req.body
    const response = await db.saveDetails(details, user_id)
    res.status(201).json(response) //json(details) is required to make the result readable for jest testing
    return null
  }
  catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
})

module.exports = router