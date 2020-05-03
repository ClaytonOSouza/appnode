const http = require('http')
const app = require('./app')
const Logger = require('./common/logger')
const { createTerminus } = require('@godaddy/terminus')


const port = +app.get('port')
const server = http.createServer(app)

const onSignal = () => {
    Logger.info('server is starting cleanup')
    return Promise.resolve()
}

const onShutdown = () => {
    Logger.info('cleanup finished, server is shutting down')
}

const onHealthCheck = () => {
    return Promise.resolve('UP')
}

const terminusConfiguration = Object.freeze({
    logger: Logger.info,
    signal: 'SIGINT',
    healthChecks: {
        '/healthcheck': onHealthCheck
    },
    onSignal,
    onShutdown
})

createTerminus(server, terminusConfiguration)

server.listen(port, () => Logger.info(`Magic happens on port ${port}`))
