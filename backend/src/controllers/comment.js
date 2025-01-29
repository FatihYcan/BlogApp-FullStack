"use strict"

/* --- BLOG API COMMENT CONTROLLER --- */

//? Import Comment model
const Comment = require('../models/comment')

module.exports = {
    list: async (req, res) => {
        /*       
            #swagger.tags = ["Comment"]
            #swagger.summary = "List Comments"
            #swagger.description = `You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul>
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>`
        */
        const data = await res.getModelList(Comment)
        res.status(200).send({ error: false, detail: await res.getModelListDetails(Comment), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Comment"]
            #swagger.summary = "Create Comment"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Comment' } }
        */
        const data = await Comment.create(req.body)
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Comment"]
            #swagger.summary = "Get Single Comment"
        */
        const data = await Comment.findOne({ _id: req.params.id })
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Comment"]
            #swagger.summary = "Update Comment"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/Comment' } }
        */

        //! Kullanıcı sadece kendi kaydını güncelleyebilir.
        const customFilters = req.user?.isAdmin ? { _id: req.params.id } : { _id: req.user._id }

        const data = await Comment.updateOne(customFilters, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Comment.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Comment"]
            #swagger.summary = "Delete Comment"
        */

        //! Kullanıcı sadece kendi kaydını silebilir.
        const customFilters = req.user?.isAdmin ? { _id: req.params.id } : { _id: req.user._id }

        const data = await Comment.deleteOne(customFilters)
        res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
    },
}