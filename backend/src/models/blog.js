"use strict"

/* --- BLOG API blog MODEL --- */

const { mongoose } = require('../configs/dbConnection')

//? Blog Model
const blogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true, index: true },

    title: { type: String, required: true, trim: true },

    content: { type: String, required: true, trim: true },

    // image: { type: String, required: true, trim: true },

    views: [{ type: mongoose.Schema.Types.ObjectId, ref: 'View' }],

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],

    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],

    isPublish: { type: Boolean, default: true },
},
    { collection: 'blogs', timestamps: true })

//? Blog Model Export
module.exports = mongoose.model('Blog', blogSchema)