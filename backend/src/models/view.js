"use strict"

/* --- BLOG API blog VIEW MODEL --- */

const { mongoose } = require('../configs/dbConnection')

//? View Model
const viewSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },

    deviceId: { type: String, index: true, sparse: true },
},
    { collection: 'views', timestamps: true })

//? View Model Export
module.exports = mongoose.model('View', viewSchema)