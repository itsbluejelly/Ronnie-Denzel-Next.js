// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
const express = require('express')
    // IMPORTING NECESSARY CONTROLLERS
const rootController = require('../controllers/rootController')

// INSTANTIATE A ROUTER FROM EXPRESS
const rootRouter = express.Router()

// ROUTE MIDDLEWARE
rootRouter.all('/*', rootController)

// EXPORTING THE ROOTROUTER
module.exports = rootRouter