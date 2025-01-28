"use strict"

/* --- BLOG API TOKEN MODEL --- */

const mongoose = require('mongoose')

// { "userId": "65343222b67e9681f937f001", "token": "...tokenKey..." }

//? Token Model
const tokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },

    token: { type: String, required: true, index: true, trim: true },
},
    { collection: 'tokens', timestamps: true })

//? Token Export
module.exports = mongoose.model('Token', tokenSchema)