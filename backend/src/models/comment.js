"use strict"

/* --- BLOG API COMMENT  --- */

const { mongoose } = require('../configs/dbConnection')

//? Comment Model
const commentSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    comment: { type: String, required: true, trim: true },
},
    { collection: 'comments', timestamps: true })

//? Comment Model Export
module.exports = mongoose.model('Comment', commentSchema)