"use strict"

/* --- BLOG API blog MODEL --- */

const { mongoose } = require('../configs/dbConnection')
const Like = require('./like')
const View = require('./view')

//? Blog Model
const blogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true, index: true },

    title: { type: String, required: true, trim: true },

    content: { type: String, required: true, trim: true },

    // image: [],
    // image: { type: String, required: true },
    image: { type: String },

    views: [{ type: mongoose.Schema.Types.ObjectId, ref: View.modelName }],

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: Like.modelName }],

    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],

    isPublish: { type: Boolean, default: true },
},
    { collection: 'blogs', timestamps: true })

//? Blog Model Export
module.exports = mongoose.model('Blog', blogSchema)