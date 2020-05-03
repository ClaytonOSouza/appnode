const { createLogger, transports, format } = require('winston')
const { Console } = transports
const { combine, timestamp, printf, splat } = format

const upperCaseLevel = format(info => {
    info.level = info.level.toUpperCase()
    return info
})

const customFormat = () => printf(({ level, message, timestamp }) =>
    `[${timestamp}] ${level} - [NEWS API]: ${message}`
)

const Logger = createLogger({
    level: 'info',
    format: combine(
        upperCaseLevel(),
        timestamp(),
        splat(),
        customFormat()
    ),
    transports: [
        new Console()
    ],
    exitOnError: false
})

module.exports = Logger