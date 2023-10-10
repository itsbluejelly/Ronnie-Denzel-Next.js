// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
const express = require('express')
    // IMPORTING NECESSARY CONTROLLERS
const ticketsController = require('../controllers/ticketsController')

// INSTANTIATE A ROUTER FROM EXPRESS
const ticketsRouter = express.Router()

// ROUTE MIDDLEWARES
ticketsRouter.route('/')
    .get(ticketsController.getController)
    .delete(ticketsController.deleteController)
    .post(ticketsController.postController)

// EXPORT THE TICKETSROUTER
module.exports = ticketsRouter