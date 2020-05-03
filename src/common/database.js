const mongoose = require('mongoose')
const logger = require('./logger')

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
        .then(() => logger.info('Mongodb Conectado!'))
        .catch(err => logger.error('ocorreu um erro ao conectar no mongodb!', err))
}