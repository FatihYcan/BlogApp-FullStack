"use strict"

/* --- BLOG API COMMENT  --- */

const { mongoose } = require('../configs/dbConnection')

//? Comment Model
const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },

    comment: { type: String, required: true, trim: true },
    
    bottomcomments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BottomComment' }],
},
    { collection: 'comments', timestamps: true })

//? Comment Model Export
module.exports = mongoose.model('Comment', commentSchema)