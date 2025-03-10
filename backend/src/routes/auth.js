"use strict"

/* --- BLOG API AUTH ROUTE --- */

const router = require('express').Router()
const auth = require('../controllers/auth')

//? URL: /auth
router.post('/login', auth.login)
router.get('/logout', auth.logout)
router.post('/forgot-password', auth.forgotPassword)

//? Auth Route Export
module.exports = router