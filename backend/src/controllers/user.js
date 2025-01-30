"use strict"

/* --- BLOG API USER CONTROLLER --- */

//? Imports
const User = require('../models/user')
const passwordEncrypt = require('../helpers/passwordEncrypt')
const Token = require('../models/token')

module.exports = {
    list: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List User"
            #swagger.description = `You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul>
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>`
       */

        //! Kullanıcı sadece kendi kaydını görebilir.
        const customFilters = req.user?.isAdmin ? {} : { _id: req.user._id }

        const data = await res.getModelList(User, customFilters)
        res.status(200).send({ error: false, details: await res.getModelListDetails(User, customFilters), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "username": "test", "firstName": "test", "lastName": "test", "email": "test@site.com", "password": "1234", "image": "" } }
        */

        //! Yeni kayıtlarda admin=false
        req.body.isAdmin = false

        const data = await User.create(req.body)

        //! Kullanıcı kaydı başarılır ise otomatik login olsun ve token oluşturulsun.
        const tokenData = await Token.create({ userId: data._id, token: passwordEncrypt(data._id + Date.now()) })

        res.status(201).send({ error: false, data, token: tokenData.token })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */

        //! Kullanıcı sadece kendi kaydını görebilir.
        const customFilters = req.user?.isAdmin ? { _id: req.params.id } : { _id: req.user._id }

        const data = await User.findOne(customFilters)
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "username": "test", "firstName": "test", "lastName": "test", "email": "test@site.com", "password": "1234", "image": "" } }
        */

        //! Kullanıcı sadece kendi kaydını güncelleyebilir.
        const customFilters = req.user?.isAdmin ? { _id: req.params.id } : { _id: req.user._id }

        //! Eğer admin değil ise isAdmin ve icActive güncellenemez.
        if (!req.user?.isAdmin) {
            delete req.body.isActive
            delete req.body.isAdmin
        }

        const data = await User.updateOne(customFilters, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await User.findOne(customFilters) })
    },

    delete: async (req, res) => {

        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */

        //! Hem kullanıcı hem de isAdmin kendi kaydını silemez.
        if (req.params.id != req.user._id) {
            const data = await User.deleteOne({ _id: req.params.id })
            res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
        } else {
            res.errorStatusCode = 400
            throw new Error("You can't delete your own account.")
        }
    }
}