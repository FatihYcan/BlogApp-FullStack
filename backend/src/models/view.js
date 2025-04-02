"use strict"

/* --- BLOG API blog VIEW MODEL --- */

const { mongoose } = require('../configs/dbConnection')

//? View Model
const viewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },

    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },

    userIp: { type: String, index: true, sparse: true },

    userAgent: { type: String, index: true },
},
    { collection: 'views', timestamps: true })

//? View Model Export
module.exports = mongoose.model('View', viewSchema)

