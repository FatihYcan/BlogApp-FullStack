"use strict"

/* --- BLOG API POST VIEW --- */

const mongoose = require('mongoose')

//? PostView Model
const postViewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true, index: true },
},
    { collection: 'postviews', timestamps: true })

//? PostView Model Export
module.exports = mongoose.model('PostView', postViewSchema)

