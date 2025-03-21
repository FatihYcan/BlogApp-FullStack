"use strict"

/* --- CONTENT API CONTENT ROUTE --- */

const router = require('express').Router()
const content = require('../controllers/content')
const permissions = require('../middlewares/permissions')
const { contentUpload } = require('../middlewares/upload')

//? URL: /contents
router.route('/').get(content.list).post(permissions.isLogin, contentUpload.array('images'), content.create)
router.route('/:id').get(content.read).put(permissions.isLogin, contentUpload.array('images'), content.update).patch(permissions.isLogin, contentUpload.array('images'), content.update).delete(permissions.isLogin, content.delete)

module.exports = router