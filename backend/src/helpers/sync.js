"use strict"

/* --- BLOG API SYNC --- */

module.exports = async () => {
    // return null;

    //? REMOVE DATABASE
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')

    //? USER
    const User = require('../models/user')
    await User.deleteMany() // !!! Clear collection.
    await User.create({
        "_id": "65343222b67e9681f937f001",
        "username": "admin",
        "firstName": "admin",
        "lastName": "admin",
        "email": "admin@site.com",
        "password": "aA?123456",
        "isActive": true,
        "isAdmin": true
    })
    await User.create({
        "_id": "65343222b67e9681f937f003",
        "username": "test",
        "password": "aA?123456",
        "email": "test@site.com",
        "firstName": "test",
        "lastName": "test",
        "isActive": true,
        "isAdmin": false
    })

    //? CATEGORY
    const Category = require('../models/category')
    await Category.create({
        "_id": "679a2c8987b220a27b68b410",
        "name": "Health"
    })

    //? BLOG
    const Blog = require('../models/blog')
    await blog.create({
        "_id": "679a3090896534f79624b450",
        "userId": "65343222b67e9681f937f003",
        "categoryId": "679a2c8987b220a27b68b410",
        "title": "Test 1 Title",
        "content": "Test 1 Content",
        "views": ["65343222b67e9681f937f001", "65343222b67e9681f937f003"],
        "likes": ["65343222b67e9681f937f001", "65343222b67e9681f937f003"]
    })
    await Blog.create({
        "_id": "679a3090896534f79624b452",
        "userId": "65343222b67e9681f937f001",
        "categoryId": "679a2c8987b220a27b68b410",
        "title": "Admin 1 Title",
        "content": "Admin 1 Content",
        "views": ["65343222b67e9681f937f003"],
        "likes": ["65343222b67e9681f937f003"]
    })

    const Comment = require('../models/comment')
    await Comment.create({
        "_id": "679a3090896534f79624b453",
        "blogId": "679a3090896534f79624b450",
        "userId": "65343222b67e9681f937f003",
        "content": "Test 1 Comment"
    })
    await Comment.create({
        "_id": "679a3090896534f79624b454",
        "blogId": "679a3090896534f79624b452",
        "userId": "65343222b67e9681f937f001",
        "content": "Admin 1 Comment"
    })

    const Like = require('../models/like')
    await Like.create({
        "_id": "679a3090896534f79624b455",
        "blogId": "679a3090896534f79624b450",
        "userId": "65343222b67e9681f937f003",
    })
    await Like.create({
        "_id": "679a3090896534f79624b456",
        "blogId": "679a3090896534f79624b452",
        "userId": "65343222b67e9681f937f001",
    })

    const View = require('../models/view')
    await View.create({
        "_id": "679a3090896534f79624b457",
        "blogId": "679a3090896534f79624b450",
        "userId": "65343222b67e9681f937f003",
    })
    await View.create({
        "_id": "679a3090896534f79624b458",
        "blogId": "679a3090896534f79624b452",
        "userId": "65343222b67e9681f937f001",
    })

    //? End
    console.log('* Synchronized *')
}