const router = require('express').Router()
const newsController = require('./news/controller')

router.get('/noticias', newsController.listNews)
router.post('/noticias', newsController.createNews)

module.exports = router