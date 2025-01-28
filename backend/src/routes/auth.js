"use strict"

/* --- BLOG API AUTH ROUTE --- */

const router = require('express').Router()
const auth = require('../controllers/auth')

//? URL: /auth
router.post('/login', auth.login)
router.get('/logout', auth.logout)

//? Auth Route Export
module.exports = router