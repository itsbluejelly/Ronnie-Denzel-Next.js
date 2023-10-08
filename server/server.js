// IMPORTING NECESSARY FILES
const express = require('express')
const dotenv = require('dotenv')

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

app.listen(port, () => console.log(`Connected on port number: ${port}`))