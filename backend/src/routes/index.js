"use strict"

/* --- BLOG API INDEX ROUTE --- */

const router = require('express').Router()

//? URL: /

//? auth
router.use('/auth', require('./auth'))
//? blog
router.use('/blogs', require('./blog'))
//? bottomcomment
router.use('/bottomcomments', require('./bottomcomment'))
//? category
router.use('/categories', require('./category'))
//? comment
router.use('/comments', require('./comment'))
//? content
router.use('/contents', require('./content'))
//? document
router.use('/documents', require('./document'))
//? token
router.use('/tokens', require('./token'))
//? user
router.use('/users', require('./user'))

module.exports = router