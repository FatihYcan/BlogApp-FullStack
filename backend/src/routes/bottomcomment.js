"use strict"

/* --- BLOG API BOTTOM COMMENT ROUTE --- */

const router = require('express').Router()
const bottomcomment = require('../controllers/bottomcomment')
const permissions = require('../middlewares/permissions')

//? URL: /bottomcomments
router.route('/').get(bottomcomment.list).post(permissions.isLogin, bottomcomment.create)
router.route('/:id').get(bottomcomment.read).put(permissions.isLogin, bottomcomment.update).patch(permissions.isLogin, bottomcomment.update).delete(permissions.isLogin, bottomcomment.delete)

module.exports = router