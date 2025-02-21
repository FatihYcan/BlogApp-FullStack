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
        const { username, email, password } = req.body;

        //! Eksik bilgi kontrolü
        if (!(username || email) || !password) {
            res.errorStatusCode = 400;
            throw new Error("Username/email and password are required");
        }

        //! Kullanıcıyı veritabanında ara
        const user = await User.findOne({ $or: [{ username }, { email }] });

        //! Kullanıcı bulunamazsa
        if (!user) {
            res.errorStatusCode = 400;
            throw new Error("You entered an invalid username/email and/or password");
        }

        //! Şifre doğrulaması
        if (user.password !== passwordEncrypt(password)) {
            res.errorStatusCode = 400;
            throw new Error("You entered an invalid password");
        }

        //! Kullanıcı aktif değilse
        if (!user.isActive) {
            res.errorStatusCode = 400;
            throw new Error("User is not active");
        }

        //! Token işlemleri
        let tokenData = await Token.findOne({ userId: user._id });

        //! Token yoksa yeni token oluştur
        if (!tokenData) { tokenData = await Token.create({ userId: user._id, token: passwordEncrypt(user._id + Date.now()) }) }
        res.send({ error: false, token: tokenData.token, user });
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