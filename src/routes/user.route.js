const express = require('express')
const route = express.Router()
const controller = require('../controllers/user.controller')

route.get('/', controller.index)

route.get('/search', controller.search)

route.get('/:id', controller.information)


module.exports = route