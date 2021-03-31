const express = require('express')
const path = require('path')

const getRoutes = require('./routes/getRoutes')
const postRoutes = require('./routes/postRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', getRoutes)
server.use('/api/v1', postRoutes)

module.exports = server
