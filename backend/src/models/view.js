"use strict"

/* --- BLOG API blog VIEW MODEL --- */

const { mongoose } = require('../configs/dbConnection')

//? View Model
const viewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },

    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },

    deviceId: { type: String, index: true, sparse: true },

    deviceModel: { type: String, required: true },

    userIp: { type: String, required: true },
},
    { collection: 'views', timestamps: true })

//? View Model Export
module.exports = mongoose.model('View', viewSchema)

