"use strict"

/* --- BLOG API CATEGORY MODEL --- */

const { mongoose } = require('../configs/dbConnection')

//? Category Model
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
},
    { collection: 'categories', timestamps: true })

//? Category Model Export
module.exports = mongoose.model('Category', categorySchema)