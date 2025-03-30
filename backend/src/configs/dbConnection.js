"use strict"

/* --- BLOG API MongoDB Connection--- */

const mongoose = require('mongoose')

const dbConnection = function () {
    // Connect:
    mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10,
        useFindAndModify: false,
        useCreateIndex: true,
    })
        .then(() => console.log('* DB Connected * '))
        .catch((err) => console.log('* DB Not Connected * ', err))
}

//? Export:
module.exports = { mongoose, dbConnection }


