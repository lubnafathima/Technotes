const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message, logFileName) => {
    // datetime var with format, the yyMM... is been formated (can find in npmpackage.com)
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    //1. \t is a log to make it easy to import logs 2.uuid - which create a specific id for each log item(which can be handy) 3. message - actual message is passed in. 4. \n creates new line  
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {
        //checking if the directory exist
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    } catch (err) {
        console.log(err)
    }
}
// datatime var does not need to be a template literal.

// actual middleware:
const logger = (req, res, next) => {
    //passing logEvent req method, tab, req url, tab, req.header.orig - we are writing all that to reqLog.log (which is like a text file but convention to write log) - only log it when it comes from out own url
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    //moving to next piece of middleware - also to make sure logger comes first before anything
    next()
}

module.exports = { logEvents, logger }