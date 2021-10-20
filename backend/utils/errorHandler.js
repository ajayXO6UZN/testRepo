class ErrorHandler extends Error {
    
    constructor(message, statusCode) {
        super(message);
        console.log('class2')
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor);

    }

}

module.exports = ErrorHandler