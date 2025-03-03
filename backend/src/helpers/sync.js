"use strict"

/* --- BLOG API SYNC --- */

module.exports = async () => {
    return null;

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
        "image": [],
        "isActive": true,
        "isAdmin": true
    })
    await User.create({
        "_id": "65343222b67e9681f937f002",
        "username": "test",
        "firstName": "test",
        "lastName": "test",
        "email": "test@site.com",
        "password": "aA?123456",
        "image": [],
        "isActive": true,
        "isAdmin": false
    })

    //? CATEGORY
    const Category = require('../models/category')
    await Category.deleteMany() // !!! Clear collection
    await Category.create({
        "_id": "65343222b67e9681f937f003",
        "name": "Health"
    })
    await Category.create({
        "_id": "65343222b67e9681f937f004",
        "name": "World"
    })

    //? BLOG
    const Blog = require('../models/blog')
    await Blog.deleteMany() // !!! Clear collection
    await Blog.create({
        "_id": "65343222b67e9681f937f005",
        "userId": "65343222b67e9681f937f001",
        "categoryId": "65343222b67e9681f937f003",
        "title": "Admin 1 Title",
        "content": "Admin 1 Content",
        "images": [],
        "views": ["65343222b67e9681f937f010"],
        "likes": ["65343222b67e9681f937f014", "65343222b67e9681f937f015"],
        "comments": ["65343222b67e9681f937f018", "65343222b67e9681f937f019"],
        "viewCount": 1,
        "isPublish": true
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f006",
        "userId": "65343222b67e9681f937f002",
        "categoryId": "65343222b67e9681f937f004",
        "title": "Test 1 Title",
        "content": "Test 1 Content",
        "images": [],
        "views": ["65343222b67e9681f937f011", "65343222b67e9681f937f012"],
        "likes": ["65343222b67e9681f937f016"],
        "comments": ["65343222b67e9681f937f020"],
        "viewCount": 2,
        "isPublish": true
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f007",
        "userId": "65343222b67e9681f937f001",
        "categoryId": "65343222b67e9681f937f004",
        "title": "Admin 11 Title",
        "content": "Admin 11 Content",
        "images": [],
        "views": [],
        "likes": [],
        "comments": [],
        "viewCount": 0,
        "isPublish": true
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f008",
        "userId": "65343222b67e9681f937f002",
        "categoryId": "65343222b67e9681f937f003",
        "title": "Test 11 Title",
        "content": "Test 11 Content",
        "images": [],
        "views": ["65343222b67e9681f937f013"],
        "likes": [],
        "comments": [],
        "viewCount": 1,
        "isPublish": true
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f009",
        "userId": "65343222b67e9681f937f001",
        "categoryId": "65343222b67e9681f937f003",
        "title": "Test 111 Title",
        "content": "Test 111 Content",
        "images": [],
        "views": [],
        "likes": ["65343222b67e9681f937f017"],
        "comments": [],
        "viewCount": 0,
        "isPublish": false
    })

    const View = require('../models/view')
    await View.deleteMany() // !!! Clear collection
    await View.create({
        "_id": "65343222b67e9681f937f010",
        "userId": "65343222b67e9681f937f001",
        "blogId": "65343222b67e9681f937f005",
    })
    await View.create({
        "_id": "65343222b67e9681f937f011",
        "userId": "65343222b67e9681f937f002",
        "blogId": "65343222b67e9681f937f006",
    })
    await View.create({
        "_id": "65343222b67e9681f937f012",
        "userId": "65343222b67e9681f937f001",
        "blogId": "65343222b67e9681f937f006",
    })
    await View.create({
        "_id": "65343222b67e9681f937f013",
        "userId": "65343222b67e9681f937f002",
        "blogId": "65343222b67e9681f937f008",
    })

    const Like = require('../models/like')
    await Like.deleteMany() // !!! Clear collection
    await Like.create({
        "_id": "65343222b67e9681f937f014",
        "userId": "65343222b67e9681f937f002",
        "blogId": "65343222b67e9681f937f005",
    })
    await Like.create({
        "_id": "65343222b67e9681f937f015",
        "userId": "65343222b67e9681f937f001",
        "blogId": "65343222b67e9681f937f005",
    })
    await Like.create({
        "_id": "65343222b67e9681f937f016",
        "userId": "65343222b67e9681f937f001",
        "blogId": "65343222b67e9681f937f006",
    })
    await Like.create({
        "_id": "65343222b67e9681f937f017",
        "userId": "65343222b67e9681f937f001",
        "blogId": "65343222b67e9681f937f009",
    })

    const Comment = require('../models/comment')
    await Comment.deleteMany() // !!! Clear collection
    await Comment.create({
        "_id": "65343222b67e9681f937f018",
        "userId": "65343222b67e9681f937f002",
        "blogId": "65343222b67e9681f937f005",
        "comment": "Test 1 Comment",
        "bottomcomments": ["65343222b67e9681f937f021", "65343222b67e9681f937f022"],
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f019",
        "userId": "65343222b67e9681f937f001",
        "blogId": "65343222b67e9681f937f005",
        "comment": "Admin 1 Comment",
        "bottomcomments": ["65343222b67e9681f937f023"],
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f020",
        "userId": "65343222b67e9681f937f001",
        "blogId": "65343222b67e9681f937f006",
        "comment": "Admin 1 Comment",
        "bottomcomments": [],
    })

    const BottomComment = require('../models/bottomcomment')
    await BottomComment.deleteMany() // !!! Clear collection
    await BottomComment.create({
        "_id": "65343222b67e9681f937f021",
        "userId": "65343222b67e9681f937f002",
        "commentId": "65343222b67e9681f937f018",
        "comment": "Test 1 Bottom Comment",
    })
    await BottomComment.create({
        "_id": "65343222b67e9681f937f022",
        "userId": "65343222b67e9681f937f001",
        "commentId": "65343222b67e9681f937f018",
        "comment": "Admin 1 Bottom Comment",
    })
    await BottomComment.create({
        "_id": "65343222b67e9681f937f023",
        "userId": "65343222b67e9681f937f001",
        "commentId": "65343222b67e9681f937f019",
        "comment": "Admin 11 Bottom Comment",
    })

    //? End
    console.log('* Synchronized *')
}