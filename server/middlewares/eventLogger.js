// IMPORTING NECESSARY FILES
const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises
const { v4: uuid } = require('uuid')
const {format} = require('date-fns')

// CREATING AN EVENTLOGGER FUNCTION THAT LOGS OUT A MESSAGE REGARDING ANY ACTION IN THE SERVER
async function eventLogger(message1, message2, fileName){
    const dateTime = `${format(new Date(), "do 'of' MMMM yyyy\thh:mm:ss aaaa")}`

    try{
        if(typeof fileName !== 'string'){
            throw new TypeError("The file name must be a string")
        }

        const loggedItem = `${uuid()}\t${dateTime}\t${message1}\t${message2}\n`

        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', fileName), loggedItem, 'utf-8')
        console.log(loggedItem)
    }catch(error){
        try{
            const errorItem = `${uuid()}\t${dateTime}\t${error.name}\t${error.message}\n`

            if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
                await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
            }
    
            await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 'errorLogs.txt'), errorItem, 'utf-8')
            console.log(errorItem)
        }catch(secondError){
            console.log(`${uuid()}\t${dateTime}\t${secondError.name}\t${secondError.message}\n`)
        }
    }
}

// EXPORTING THE EVENTLOGGER FUNCTION
module.exports = eventLogger