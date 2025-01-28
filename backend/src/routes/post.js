"use strict"

/* --- BLOG API POST ROUTE --- */

const router = require('express').Router()

const post = require('../controllers/post')
const permissions = require('../middlewares/permissions')

//? URL: /posts
router.route('/').get(post.list).post(permissions.isLogin, post.create)
router.route('/:id').get(post.read).put(permissions.isLogin, post.update).patch(permissions.isLogin, post.update).delete(permissions.isLogin, post.delete)

module.exports = router