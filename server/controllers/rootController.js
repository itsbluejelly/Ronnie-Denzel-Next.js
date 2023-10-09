// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MIDDLEAWRE
const eventLogger = require('../middlewares/eventLogger')

// A ROOTCONTOLLER FUNCTION THAT HSNDLES ALL REQUESTS
function rootController(req, res, next){
    eventLogger(req.path, req.method, 'eventLogs.txt')
    next()
}

// EXPORT THE ROOTCONTROLLER FUNCTION
module.exports = rootController