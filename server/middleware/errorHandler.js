const { logEvents } = require('./logger')

const errorHandler = (err, req, res, next) => {
    // calling logEvents - then including error name,msg... and this is gng to errLog file
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error 

    res.status(status)

    res.json({ message: err.message })
}

module.exports = errorHandler 