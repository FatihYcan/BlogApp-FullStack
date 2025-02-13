"use strict"

/* --- BLOG API --- */

const express = require("express")
const app = express()

/* ------------------------------------------------------- */

//? envVariables to process.env
require("dotenv").config()
const cors = require("cors")
const PORT = process.env.PORT
const HOST = process.env.HOST

//? Aync error handling
require("express-async-errors")

/* ------------------------------------------------------- */

//? DB connection
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */

//? Middlewares

//? Accept JSON
app.use(express.json())
app.use(cors())

//? Accept Form-Data
app.use(express.urlencoded({ extended: true }))

//? Logging
app.use(require('./src/middlewares/logging'))

//? Check Authentication
app.use(require('./src/middlewares/authentication'))

//? res.getModelList()
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */

//? Routes

//? Home Path
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Blog API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
})

//? Routes
app.use(require('./src/routes'))

//? Static Files
app.use("/uploads/blog", express.static("./uploads/blog"))

/* ------------------------------------------------------- */
//? Synchronization
require('./src/helpers/sync')()

//? errorHandler
app.use(require('./src/middlewares/errorHandler'))

//? RUN SERVER
app.listen(PORT, HOST, () => { console.log(`Server is running on http://${HOST}:${PORT}`) })