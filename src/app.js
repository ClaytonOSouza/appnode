const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const routes = require('./routes')
const errors = require('./common/errors')
const logger = require('./common/logger')
const compression = require('compression')

require('./common/database')()

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/api/v1', routes)
app.use(compression())

app.use((req, _, next) => {
    next(errors.notFoundError(`a rota ${req.path} não foi encontrada`))
})

app.use((err, _, res, next) => {
    const code = err.code || 500
    if (code === 500) {
        logger.error(err.message, err.stack)
    }

    res.status(err.code).json({
        code: err.code,
        error: err.error || err.message
    })

    next()
})

module.exports = app