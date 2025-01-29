"use strict"

/* --- BLOG API AUTH CONTROLLER --- */

//? Imports
const User = require('../models/user')
const passwordEncrypt = require('../helpers/passwordEncrypt')
const Token = require('../models/token')

module.exports = {
    login: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get Token.'
            #swagger.parameters["body"] = { in: "body", required: true, schema: { "username": "test", "password": "1234" } }
        */
        const { username, email, password } = req.body

        if ((username || email) && password) {
            const user = await User.findOne({ $or: [{ username }, { email }] })

            if (user && user.password === passwordEncrypt(password)) {

                if (user.isActive) {

                    //? TOKEN
                    let tokenData = await Token.findOne({ userId: user._id })
                    if (!tokenData) tokenData = await Token.create({ userId: user._id, token: passwordEncrypt(user._id + Date.now()) })

                    res.send({ error: false, token: tokenData.token })

                } else {
                    res.errorStatusCode = 400
                    throw new Error("User is not active.")
                }
            } else {
                res.errorStatusCode = 400
                throw new Error("Invalid username or password.")
            }
        } else {
            res.errorStatusCode = 400
            throw new Error("Username (or email) and password are required.")
        }
    },

    logout: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Logout"
            #swagger.description = 'Logout with Token.'
        */
        const auth = req.headers?.authorization || null
        const tokenKey = auth ? auth?.split(' ') : null
        const result = await Token.deleteOne({ token: tokenKey[1] })
        res.send({ error: false, message: "Logout successful.", result })
    }
}