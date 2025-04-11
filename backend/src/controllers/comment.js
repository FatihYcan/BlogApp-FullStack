"use strict"

/* --- BLOG API COMMENT CONTROLLER --- */

//? Import Comment model
const Comment = require('../models/comment')

module.exports = {
    list: async (req, res) => {
        /*       
            #swagger.tags = ["Comments"]
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
        res.status(200).send({ error: false, details: await res.getModelListDetails(Comment), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Create Comment"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: {  "blogId": "65343222b67e9681f937f201",  "comment": "Comment 1"} }
        */

        const Blog = require('../models/blog')

        //! userId verisini req.user._id ile al
        req.body.userId = req.user._id

        const data = await Comment.create(req.body)

        //! Kullanıcının bloga olan comment durumunu ekle
        await Blog.updateOne({ _id: req.body.blogId }, { $push: { commentsId: data._id } })
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Get Single Comment"
        */
        const data = await Comment.findOne({ _id: req.params.id })
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Update Comment"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: {  "blogId": "65343222b67e9681f937f201",  "comment": "Comment 1"} }
        */

        //! Kullanıcı sadece kendi yorumlarını güncelleyebilir.
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }
        const data = await Comment.updateOne({ _id: req.params.id, ...customFilter }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Comment.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Delete Comment"
        */

        const Blog = require('../models/blog')
        const BottomComment = require("../models/bottomcomment");

        //! Kullanıcı sadece kendi yorumlarını silebilir.
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }

        //! Kullanıcının bloga olan comment durumunu kontrol et
        const blogComment = await Comment.findOne({ _id: req.params.id, ...customFilter })

        const data = await Comment.deleteOne({ _id: req.params.id, ...customFilter })

        //! Comment ait yorumları sil.
        await BottomComment.deleteMany({ _id: { $in: blogComment.bottomCommentsId } });

        //! Kullanıcının bloga olan comment durumunu sil
        await Blog.updateOne({ _id: blogComment.blogId }, { $pull: { commentsId: req.params.id } })

        res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
    },
}