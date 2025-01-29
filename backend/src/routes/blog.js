"use strict"

/* --- BLOG API blog ROUTE --- */

const router = require('express').Router()

const blog = require('../controllers/blog')
const permissions = require('../middlewares/permissions')

//? URL: /blogs
router.route('/').get(blog.list).post(permissions.isLogin, blog.create)
router.route('/:id').get(blog.read).put(permissions.isLogin, blog.update).patch(permissions.isLogin, blog.update).delete(permissions.isLogin, blog.delete)

module.exports = router