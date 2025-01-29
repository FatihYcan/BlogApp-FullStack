"use strict"

/* --- BLOG API BLOG CONTROLLER --- */

//? Import Blog model
const Blog = require('../models/blog')

module.exports = {
    list: async (req, res) => {
        /*       
            #swagger.tags = ["Blog"]
            #swagger.summary = "List Blogs"
            #swagger.description = `You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul>
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>`
        */

        //! isPublish true olanları listele, false olanları listeleme
        let customFilter = { isPublish: true }

        const data = await res.getModelList(Blog, customFilter, [{ path: "userId", select: "username firstName lastName" }, { path: "categoryId", select: "name" }])

        res.status(200).send({ error: false, detail: await res.getModelListDetails(Blog, customFilter), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Blog' } }
        */
        const data = await Blog.create(req.body)
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "Get Single Blog"
        */
        const data = await Blog.findOne({ _id: req.params.id }).populate([{ path: "userId", select: "username firstName lastName" }, { path: "categoryId", select: "name" }, { path: "comments", select: "blogId userId comment createdAt updatedAt", populate: { path: "userId", select: "username firstName lastName" } }])
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "Update Blog"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Blog' } }
        */

        //! Kullanıcı sadece kendi bloglarını günceleyebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { _id: req.user._id }
        }

        const data = await Blog.updateOne({ _id: req.params.id, ...customFilter }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Blog.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Blog"]
            #swagger.summary = "Delete Blog"
        */

        //! Kullanıcı sadece kendi bloglarını silebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { _id: req.user._id }
        }

        const data = await Blog.deleteOne({ _id: req.params.id, ...customFilter })
        res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
    },
}