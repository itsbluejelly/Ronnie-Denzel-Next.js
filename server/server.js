// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
    // IMPORTING NECESSARY MIDDLEWARES
const eventLogger = require('./middlewares/eventLogger')
    // IMPORTING NECESSARY CONFIG FILES
const connectDB = require('./config/connectDB')

// INITIALIZING APP FROM EXPRESS
const app = express()

// NON-ROUTE MIDDLEWARS
dotenv.config()
connectDB()

// ROUTE MIDDLEWARES
app.get('/', (req, res, next) => {
    res.send("Hello World")
    next()
})

// ACTIVATING SERVER
const port = process.env.PORT_NUMBER || 4000

mongoose.connection.once('open', () => {
    app.listen(port, () => {
        eventLogger("Connection to database successful", `Server running on port: ${port}`, 'databaseLogs.txt')
    })
})