"use strict"

/* --- BLOG API LIKE --- */

const mongoose = require('mongoose')

//? Like Model
const likeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true, index: true },
},
    { collection: 'likes', timestamps: true })