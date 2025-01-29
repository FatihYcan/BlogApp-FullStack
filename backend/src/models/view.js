"use strict"

/* --- BLOG API POST VIEW MODEL --- */

const mongoose = require('mongoose')

//? View Model
const viewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true, index: true },
},
    { collection: 'views', timestamps: true })

//? View Model Export
module.exports = mongoose.model('View', viewSchema)

