// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
const mongoose = require('mongoose')
    // IMPORTING NECESSARY MIDDLEWARE
const eventLogger = require('../middlewares/eventLogger')

// AN ASYNC FUNCTION THAT DECLARES HOW TO CONNECT TO DATABASE
async function connectDB(){
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }catch(error){
        eventLogger(error.name, error.message, 'errorLogs.txt')
    }
}

// EXPORTING THE ASYNC FUNCTION
module.exports = connectDB