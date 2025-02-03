"use strict"

/* --- BLOG API USER ROUTE --- */

const router = require('express').Router()
const user = require('../controllers/user')
const permissions = require('../middlewares/permissions')
const upload = require('../middlewares/upload')

//? URL: /users
router.route('/').get(permissions.isAdmin, user.list).post(upload.single('image'), user.create)
router.route('/:id').get(permissions.isLogin, user.read).put(permissions.isLogin, upload.single('image'), user.update).patch(permissions.isLogin, upload.single('image'), user.update).delete(permissions.isAdmin, user.delete)

module.exports = router