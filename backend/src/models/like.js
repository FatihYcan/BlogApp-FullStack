"use strict"

/* --- BLOG API LIKE  --- */

const { mongoose } = require('../configs/dbConnection')

//? Like Model
const likeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },
},
    { collection: "likes", timestamps: true })

//? Like Model Export
const Like = mongoose.model('Like', likeSchema)
module.exports = Like
