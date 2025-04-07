"use strict"

/* --- BLOG API CATEGORY MODEL --- */

const { mongoose } = require('../configs/dbConnection')

//? Category Model
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true, set: (name) => { return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() } },
},
    { collection: 'categories', timestamps: true })

//? Category Model Export
module.exports = mongoose.model('Category', categorySchema)