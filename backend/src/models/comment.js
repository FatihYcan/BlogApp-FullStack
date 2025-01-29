"use strict"

/* --- BLOG API COMMENT  --- */

const mongoose = require('mongoose')

//? Comment Model
const commentSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'blog', required: true, index: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    content: { type: String, required: true, trim: true },
},
    { collection: 'comments', timestamps: true })

//? Comment Model Export
module.exports = mongoose.model('Comment', commentSchema)