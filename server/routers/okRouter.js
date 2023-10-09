// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
const express = require('express')
    // IMPORTING NECESSARY CONTROLLERS
const okController = require('../controllers/okController')

// INSTANTIATE A ROUTER FROM EXPRESS
const okRouter = express.Router()

// ROUTE MIDDLEWARE
okRouter.all('/*', okController)

// EXPORTING THE OKROUTER
module.exports = okRouter