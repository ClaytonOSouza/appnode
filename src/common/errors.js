class HttpError extends Error {
    constructor(code, error) {
        super()
        this.code = code
        this.error = error
        Error.captureStackTrace(this, this.constructor)
    }
}


class NotFoundError extends HttpError {
    constructor(messsage) {
        super(400, messsage)
    }
}


class BadRequestError extends HttpError {
    constructor(message) {
        super(400, message)
    }
}

module.exports = {
    notFoundError: message => new NotFoundError(message),
    badRequestError: message => new BadRequestError(message)
}