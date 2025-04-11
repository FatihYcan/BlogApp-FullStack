"use strict"

/* --- BLOG API TOKEN MODEL --- */

const { mongoose } = require('../configs/dbConnection')

//? Token Model
const tokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true, index: true },

    token: { type: String, required: true, index: true, trim: true },
},
    { collection: 'tokens', timestamps: true })

//? Token Export
module.exports = mongoose.model('Token', tokenSchema)