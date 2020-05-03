const News = require('./model')
const Bluebird = require('bluebird')
const { validateNewsSchema } = require('./schema')

const createNews = (req, res) => {
    return Bluebird.resolve(req.body)
        .tap(validateNewsSchema)
        .then(News.create.bind(News))
        .tap(createdNew => res.status(201).json(createdNew))
}

const listNews = (_, res) => {
    return News.find({})
        .then(news => res.status(200).json(news))
}


module.exports = {
    listNews,
    createNews
}