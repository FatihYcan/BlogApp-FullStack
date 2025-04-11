"use strict"

/* --- BLOG API BOTTOM COMMENT  --- */

const { mongoose } = require('../configs/dbConnection')

//? Bottom Comment Model
const bottomCommentSchema = new mongoose.Schema({
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true, index: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    bottomComment: { type: String, required: true, trim: true },
},
    { collection: 'bottomcomments', timestamps: true })

//? Bottom Comment Model Export
module.exports = mongoose.model('BottomComment', bottomCommentSchema)