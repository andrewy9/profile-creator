const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')
const detailsRoutes = require('./routes/detailsRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/detailsRoutes', detailsRoutes)

module.exports = server
