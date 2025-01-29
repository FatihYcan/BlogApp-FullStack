"use strict"

/* --- BLOG API POST MODEL --- */

const mongoose = require('mongoose')

//? Post Model
const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true, index: true },

    title: { type: String, required: true, trim: true },

    content: { type: String, required: true, trim: true },

    // image: { type: String, required: true, trim: true },

    views: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
},
    { collection: 'posts', timestamps: true })

//? Post Model Export
module.exports = mongoose.model('Post', postSchema)