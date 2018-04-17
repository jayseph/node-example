const express = require('express')
const server = express()

server.get('/', express.static('dist'))

server.listen(3000)