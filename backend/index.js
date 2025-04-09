"use strict"

/* --- BLOG API --- */

const express = require("express")
const app = express()

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

//? res.getModelList()
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */

//? Routes

//? Home Path
app.all('/', (req, res) => {
    res.send(`
          <h3>Blog API Service</h3>
          <hr>
          <p>
              Documents:
              <ul> 
                  <li><a href="https://koseyazisi.onrender.com/documents/swagger/">SWAGGER</a></li>
                  <li><a href="https://koseyazisi.onrender.com/documents/redoc">REDOC</a></li>
                  <li><a href="https://koseyazisi.onrender.com/documents/json">JSON</a></li>
              </ul>
          </p>
      `);
  });

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