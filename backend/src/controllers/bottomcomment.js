"use strict"

/* --- BLOG API BOTTOM COMMENT CONTROLLER --- */

//? Import Bottom Comment model
const BottomComment = require('../models/bottomcomment')

module.exports = {
    list: async (req, res) => {
        /*       
            #swagger.tags = ["Bottom Comments"]
            #swagger.summary = "List Bottom Comments"
            #swagger.description = `You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul>
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>`
        */
        const data = await res.getModelList(BottomComment)
        res.status(200).send({ error: false, details: await res.getModelListDetails(BottomComment), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Bottom Comments"]
            #swagger.summary = "Create Bottom Comment"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: {  "commentId": "65343222b67e9681f937f201",  "bottomComment": "Bottom Comment 1"} }
        */

        const Comment = require('../models/comment')

        //! userId verisini req.user._id ile al
        req.body.userId = req.user._id

        const data = await BottomComment.create(req.body)

        //! Kullanıcının commente olan bottom comment durumunu ekle
        await Comment.updateOne({ _id: req.body.commentId }, { $push: { bottomCommentsId: data._id } })
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Bottom Comments"]
            #swagger.summary = "Get Single Bottom Comment"
        */
        const data = await BottomComment.findOne({ _id: req.params.id })
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Bottom Comments"]
            #swagger.summary = "Update Bottom Comment"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: {  "commentId": "65343222b67e9681f937f201",  "bottomComment": "Bottom Comment 1"} }
        */

        //! Kullanıcı sadece kendi yorumlarını güncelleyebilir.
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }
        const data = await BottomComment.updateOne({ _id: req.params.id, ...customFilter }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await BottomComment.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Bottom Comments"]
            #swagger.summary = "Delete Bottom Comment"
        */

        const Comment = require('../models/comment')

        //! Kullanıcı sadece kendi yorumlarını silebilir.
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }

        //! Kullanıcının commente olan bottom comment durumunu kontrol et
        const blogBottomComment = await BottomComment.findOne({ _id: req.params.id, ...customFilter })

        const data = await BottomComment.deleteOne({ _id: req.params.id, ...customFilter })

        //! Kullanıcının commente olan bottom comment durumunu sil
        await Comment.updateOne({ _id: blogBottomComment.commentId }, { $pull: { bottomCommentsId: req.params.id } })

        res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
    },
}