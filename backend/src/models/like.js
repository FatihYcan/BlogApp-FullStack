"use strict"

/* --- BLOG API LIKE MODEL --- */

const mongoose = require('mongoose')

//? Like Model
const likeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'blog', required: true, index: true },
},
    { collection: 'likes', timestamps: true })

//? Like Model Export
module.exports = mongoose.model('Like', likeSchema)