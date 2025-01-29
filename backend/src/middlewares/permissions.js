"use strict"

/* --- BLOG API PERMISSION --- */

module.exports = {

    isLogin: (req, res, next) => {
        // return next()

        if (req.user && req.user.isActive) {
            next()
        } else {
            res.errorStatusCode = 401
            throw new Error("NoPermission: You must login")
        }
    },

    isAdmin: (req, res, next) => {
        // return next()

        if (req.user && req.user.isActive && req.user.isAdmin) {
            next()
        } else {
            res.errorStatusCode = 401
            throw new Error("NoPermission: You must be an admin")
        }
    }
}