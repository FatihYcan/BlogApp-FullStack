"use strict"

/* --- BLOG API POST CONTROLLER --- */

//? Import Post model
const Post = require('../models/post')

module.exports = {
    list: async (req, res) => {
        /*       
            #swagger.tags = ["Post"]
            #swagger.summary = "List Posts"
            #swagger.description = `You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul>
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>`
        */
        const data = await res.getModelList(Post, {}, [{ path: "userId", select: "username firstName lastName" }, { path: "categoryId", select: "name" }])

        res.status(200).send({ error: false, detail: await res.getModelListDetails(Post), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Post"]
            #swagger.summary = "Create Post"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Post' } }
        */
        const data = await Post.create(req.body)
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Post"]
            #swagger.summary = "Get Single Post"
        */
        const data = await Post.findOne({ _id: req.params.id }).populate([{ path: "userId", select: "username firstName lastName" }, { path: "categoryId", select: "name" }])
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Post"]
            #swagger.summary = "Update Post"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Post' } }
        */

        //! Kullanıcı sadece kendi postlarını günceleyebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { _id: req.user._id }
        }

        const data = await Post.updateOne({ _id: req.params.id, ...customFilter }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Post.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Post"]
            #swagger.summary = "Delete Post"
        */

        //! Kullanıcı sadece kendi postlarını silebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { _id: req.user._id }
        }

        const data = await Post.deleteOne({ _id: req.params.id, ...customFilter })
        res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
    },
}