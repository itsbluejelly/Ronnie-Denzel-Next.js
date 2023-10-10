// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MIDDLEWARES
const eventLogger = require('../middlewares/eventLogger')
    // IMPORTING NECESSARY MODELS
const TicketModel = require('../models/Ticket')

// A GETCONTROLLER FUNCTION THAT HANDLES GET REQUESTS
async function getController(req, res, next){
    next()
}

// A POSTCONTROLLER FUNCTION THAT HANDLES POST REQUESTS
async function postController(req, res, next){
    next()
}

// A DELETECONTROLLER FUNCTION THAT HANDLES DELETE REQUESTS
async function deleteController(req, res, next){
    next()
}

// EXPORTING ALL THE CONTROLLERS
module.exports = {getController, postController, deleteController}