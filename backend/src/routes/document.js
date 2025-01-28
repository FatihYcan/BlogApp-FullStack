"use strict"

/* --- BLOG API DOCUMENT ROUTE --- */

const router = require('express').Router()

//? URL: /documents
router.all('/', (req, res) => {
    res.send({
        swagger: "documents/swagger",
        redoc: "documents/redoc",
        json: "documents/json"
    })
})

//? JSON
router.use('/json', (req, res) => {
    res.sendFile(`/src/configs/swagger.json`, { root: '.' })
})

//? REDOC
const redoc = require('redoc-express')
router.use('/redoc', redoc(`/src/configs/swagger.json`, { title: 'Blog API', pathInMiddlewares: true }))

//? SWAGGER
const swaggerUi = require('swagger-ui-express')
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(`/src/configs/swagger.json`))

module.exports = router