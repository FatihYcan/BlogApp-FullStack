"use strict"

/* --- BLOG API USER MODEL --- */

const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')

//? User Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },

    firstName: { type: String, required: true, trim: true },

    lastName: { type: String, required: true, trim: true },

    email: { type: String, required: true, unique: true, trim: true, validate: [(email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email), 'Email type is not correct.'] },

    password: {
        type: String, required: true, trim: true, set: (password) => {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
                return passwordEncrypt(password)
            } else {
                throw new Error("Password type is not correct.")
            }
        },
    },

    image: [],
    // image: { type: String },

    isActive: { type: Boolean, default: true },

    isAdmin: { type: Boolean, default: false }
},
    { collection: 'users', timestamps: true })

//? User Model Export
module.exports = mongoose.model('User', userSchema)