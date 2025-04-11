"use strict"

/* --- BLOG API COMMENT  --- */

const { mongoose } = require('../configs/dbConnection')

//? Like Model
const likeSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
},
    { collection: 'likes', timestamps: true })

//? Like Model Export
module.exports = mongoose.model('Like', likeSchema)