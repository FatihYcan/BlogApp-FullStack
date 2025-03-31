"use strict"

/* --- BLOG API --- */

const express = require("express")
const path = require("path")
const app = express()

/* ------------------------------------------------------- */

//? envVariables to process.env
require("dotenv").config()
const cors = require("cors")
const PORT = process.env.PORT
const HOST = process.env.HOST

//? Aync error handling
require("express-async-errors")

//? Static Files
app.use(express.static(path.join(__dirname, "../frontend/build")));

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

//? res.getModelList()
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */

//? Routes

//? Home Path
app.all('/documents', (req, res) => {
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
// app.use("/uploads/blog", express.static("./uploads/blog"))
// app.use("/uploads/user", express.static("./uploads/user"))
// app.use("/uploads/content", express.static("./uploads/content"))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


/* ------------------------------------------------------- */

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

//? errorHandler
app.use(require('./src/middlewares/errorHandler'))

//? RUN SERVER
app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))

//? Synchronization
// Syncronization (must be in commentLine):
if (process.env.NODE_ENV == "development") {
    // require('./src/helpers/sync')() // !!! It clear database.
}