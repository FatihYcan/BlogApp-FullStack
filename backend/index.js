"use strict"

/* --- BLOG API --- */

const express = require("express")
const app = express()

/* ------------------------------------------------------- */

//? envVariables to process.env
require("dotenv").config()
const PORT = process.env.PORT
const HOST = process.env.HOST

//? Aync error handling
require("express-async-errors")

/* ------------------------------------------------------- */

//? DB connection
require("./src/configs/dbConnection")

/* ------------------------------------------------------- */

//? Middlewares

//? Accept JSON
app.use(express.json())

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
    })
})

//? Routes
// app.use(require('./src/routes'))

/* ------------------------------------------------------- */

//? errorHandler
app.use(require('./src/middlewares/errorHandler'))

//? RUN SERVER
app.listen(PORT, HOST, () => { console.log(`Server is running on http://${HOST}:${PORT}`) })