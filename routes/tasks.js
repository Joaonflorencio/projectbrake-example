const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

router.get('/', (req, res) => (res.end('estamos dentro de las rutas')))

module.exports = router