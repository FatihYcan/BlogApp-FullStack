"use strict"

/* --- BLOG API SYNC --- */

module.exports = async function () {
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

    //? End
    console.log('* Synchronized *')
}