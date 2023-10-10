// IMPORTING NECESSARY FILES
    // IMPORT NECESSARY MODULES
const mongoose = require('mongoose')

// INSTANTIATE A SCHEMA FROM MONGOOSE
const Schema = mongoose.Schema

// DEFINING THE TICKET SCHEMA
const TicketSchema = new Schema({
    title: {
        type: String,
        required: [true, "Your ticket must have a title"]
    },

    body: { type: String },
    
    priority: {
        type: Number,
        required: [true, "Your ticket must have a level of priority"],
        default: 3
    },

    email: {
        type: String,
        required: [true, "Your ticket must be addressed to an email"]
    },
})

// EXPORTING A TICKET MODEL FROM THE SCHEMA
module.exports = mongoose.model("Ticket", TicketSchema)