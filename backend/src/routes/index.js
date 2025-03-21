"use strict"

/* --- BLOG API INDEX ROUTE --- */

const router = require('express').Router()

//? URL: /

//? auth
router.use('/auth', require('./auth'))
//? user
router.use('/users', require('./user'))
//? token
router.use('/tokens', require('./token'))

//? blog
router.use('/blogs', require('./blog'))
//? content
router.use('/contents', require('./content'))
//? comment
router.use('/comments', require('./comment'))
//? bottomcomment
router.use('/bottomcomments', require('./bottomcomment'))
//? category
router.use('/categories', require('./category'))

//? document
router.use('/documents', require('./document'))

module.exports = router