// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MIDDLEWARES
const eventLogger = require('../middlewares/eventLogger')
    // IMPORTING NECESSARY MODELS
const TicketModel = require('../models/Ticket')
    // IMPORTING NECESSARY MODULES
const validator = require('validator')

// A GETCONTROLLER FUNCTION THAT HANDLES GET REQUESTS
async function getController(req, res, next){
    try{
        const foundTickets = await TicketModel
            .find()
            .select("title priority email body")
            
            .sort({
                priority: 1,
                title: 1,
                email: 1
            })

        res.status(200).json({
            success: "Tickets fetched successfully",
            data: foundTickets
        })

        eventLogger("Tickets fetched successfully", foundTickets, "databaseLogs.txt")

    }catch(error){
        res.status(404).json({ error: error.message })
        eventLogger(error.name, error.message, 'errorLogs.txt')
    }

    next()
}

// A POSTCONTROLLER FUNCTION THAT HANDLES POST REQUESTS
async function postController(req, res, next){
    try{
        const {email, priority} = req.body

        if(!validator.isEmail(email)){
            throw new Error("Invalid email")
        }else if(priority > 3 || priority < 1){
            throw new Error("Invalid priority level")
        }

        const createdTicket = await TicketModel.create(req.body)
        
        res.status(201).json({
            success: "Ticket created successfully",
            data: createdTicket
        })

        eventLogger("Ticket created successfully", `Ticket ID is ${createdTicket._id}`, "databaseLogs.txt")
    }catch(error){
        res.status(400).json({ error: error.message })
        eventLogger(error.name, error.message, 'errorLogs.txt')
    }

    next()
}

// A DELETECONTROLLER FUNCTION THAT HANDLES DELETE REQUESTS
async function deleteController(req, res, next){
    try{
        const deletedTickets = await TicketModel.deleteMany()
        res.status(200).json({ success: `${deletedTickets.deletedCount} tickets deleted successfully` })
        eventLogger("Tickets deleted successfully", `${deletedTickets.deletedCount} tickets were affected`, "databaseLogs.txt")
    }catch(error){
        res.status(404).json({ error: error.message })
        eventLogger(error.name, error.message, 'errorLogs.txt')
    }

    next()
}

// EXPORTING ALL THE CONTROLLERS
module.exports = {getController, postController, deleteController}