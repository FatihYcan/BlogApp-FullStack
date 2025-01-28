"use strict"

/* --- BLOG API COMMENT ROUTE --- */

const router = require('express').Router()

const comment = require('../controllers/comment')
const permissions = require('../middlewares/permissions')

//? URL: /comments
route.route('/').get(comment.list).post(permissions.isLogin, comment.create)
route.route('/:id').get(comment.read).put(permissions.isLogin, comment.update).patch(permissions.isLogin, comment.update).delete(permissions.isLogin, comment.delete)

module.exports = router