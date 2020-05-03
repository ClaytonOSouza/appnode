const yup = require('yup')
const { badRequestError } = require('../common/errors')

const newsSchemaValidation = yup.object().shape({
    title: yup.string()
        .required('O campo title é obrigatório'),

    category: yup.string()
        .required('O campo category é obrigatório'),

    description: yup.string()
        .required('O campo description é obrigatório')
})

const validateNewsSchema = payload =>
    newsSchemaValidation.validate(payload, { abortEarly: false })
    .catch(({ errors }) => Promise.reject(badRequestError(errors)))

module.exports = { validateNewsSchema }