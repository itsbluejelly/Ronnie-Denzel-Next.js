// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MIDDLEAWRE
const eventLogger = require('../middlewares/eventLogger')

// A OKCONTOLLER FUNCTION THAT HSNDLES ALL REQUESTS
function okController(req, res, next){
    res.status(200).send("Successful launch")
    next()
}

// EXPORT THE OKCONTROLLER FUNCTION
module.exports = okController