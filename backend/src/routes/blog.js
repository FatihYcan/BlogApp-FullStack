"use strict"

/* --- BLOG API blog ROUTE --- */

const router = require('express').Router()
const blog = require('../controllers/blog')
const permissions = require('../middlewares/permissions')
const { blogUpload } = require('../middlewares/upload')

//? URL: /blogs
router.route('/').get(blog.list).post(permissions.isLogin, blogUpload.array('images'), blog.create)
router.route('/:id').get(blog.read).put(permissions.isLogin, blogUpload.array('images'), blog.update).patch(permissions.isLogin, blogUpload.array('images'), blog.update).delete(permissions.isLogin, blog.delete)
router.get('/:id/getLike', permissions.isLogin, blog.getLike)
router.post('/:id/postLike', permissions.isLogin, blog.postLike)

module.exports = router