"use strict"

/* --- BLOG API USER ROUTE --- */

const router = require('express').Router()
const user = require('../controllers/user')
const permissions = require('../middlewares/permissions')
const { userUpload } = require('../middlewares/upload')

//? URL: /users
router.route('/').get(permissions.isAdmin, user.list).post(userUpload.single('image'), user.create)
router.route('/:username').get(permissions.isLogin, user.read).put(permissions.isLogin, userUpload.single('image'), user.update).patch(permissions.isLogin, userUpload.single('image'), user.update).delete(permissions.isAdmin, user.delete)

module.exports = router