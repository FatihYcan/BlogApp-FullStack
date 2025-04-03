"use strict"

/* --- BLOG API --- */

const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')

//? Trust proxy for correct client IP and protocol when behind a proxy
app.set('trust proxy', true)

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

//? Check Authentication
app.use(require('./src/middlewares/authentication'))

//? Cookie parser
app.use(cookieParser())

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
app.use("/uploads/user", express.static("./uploads/user"))
app.use("/uploads/content", express.static("./uploads/content"))

/* ------------------------------------------------------- */
//? Synchronization
// require('./src/helpers/sync')()

//? errorHandler
app.use(require('./src/middlewares/errorHandler'))

//? RUN SERVER
app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))