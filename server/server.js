// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
const express = require('express')
const dotenv = require('dotenv')
    // IMPORTING NECESSARY MIDDLEWARES
const eventLogger = require('./middlewares/eventLogger')

// INITIALIZING APP FROM EXPRESS
const app = express()

// NON-ROUTE MIDDLEWARS
dotenv.config()

// ROUTE MIDDLEWARES
app.get('/', (req, res, next) => {
    res.send("Hello World")
    next()
})

// ACTIVATING SERVER
const port = process.env.PORT_NUMBER || 4000

app.listen(port, () => {
    eventLogger("Server instantiated successfully", `Running on port: ${port}`, "databaseLogs.txt")
})