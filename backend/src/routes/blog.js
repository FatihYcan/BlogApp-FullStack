"use strict"

/* --- BLOG API BLOG ROUTE --- */

const router = require('express').Router()
const blog = require('../controllers/blog')
const permissions = require('../middlewares/permissions')
const { blogUpload } = require('../middlewares/upload')

//? URL: /blogs
router.route('/').get(blog.list).post(permissions.isLogin, blogUpload.single('image'), blog.create)
router.post('/createId', permissions.isLogin, blogUpload.single('image'), blog.createId)
router.route('/:id').put(permissions.isLogin, blogUpload.single('image'), blog.update).patch(permissions.isLogin, blogUpload.single('image'), blog.update).delete(permissions.isLogin, blog.delete)
router.route('/:username/:id').get(blog.read)
router.get('/:id/getLike', permissions.isLogin, blog.getLike)
router.post('/:id/postLike', permissions.isLogin, blog.postLike)

module.exports = router