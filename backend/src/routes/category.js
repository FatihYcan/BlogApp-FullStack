"use strict"

/* --- BLOG API CATEGORY ROUTE --- */

const router = require('express').Router()
const category = require('../controllers/category')
const permissions = require('../middlewares/permissions')

//? URL: /categories
router.route('/').get(category.list).post(permissions.isAdmin, category.create)
router.route('/:id').get(category.read).put(permissions.isAdmin, category.update).patch(permissions.isAdmin, category.update).delete(permissions.isAdmin, category.delete)

module.exports = router