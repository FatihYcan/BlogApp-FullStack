"use strict"

/* --- BLOG API CATEGORY MODEL --- */

const mongoose = require('mongoose')

//? Category Model
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
},
    { collection: 'categories', timestamps: true })

//? Category Model Export
module.exports = mongoose.model('Category', categorySchema)