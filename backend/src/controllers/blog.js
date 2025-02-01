"use strict"

/* --- BLOG API BLOG CONTROLLER --- */

//? Import Blog model
const Blog = require('../models/blog')

module.exports = {
    list: async (req, res) => {
        /*       
            #swagger.tags = ["Blogs"]
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

        //! Kullanıcı kendi bloglarını görmek isterse isPublish filtresini kaldır ve kendi bloglarını listele
        if (req.query.author && req.user && req.query.author == req.user._id.toString()) {
            delete customFilter.isPublish
            customFilter.userId = req.user._id
        }

        const data = await res.getModelList(Blog, customFilter, [{ path: "userId", select: "username firstName lastName" }, { path: "categoryId", select: "name" }])
        res.status(200).send({ error: false, detail: await res.getModelListDetails(Blog, customFilter), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "categoryId": "65343222b67e9681f937f101", "title": "Blog Title 1", "content": "Blog Content 1", "image": "http://imageURL", "isPublish": true } }
        */

        //! userId verisini req.user._id ile al
        req.body.userId = req.user._id

        const data = await Blog.create(req.body)
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Get Single Blog"
        */
        const View = require('../models/view')

        //! Kullanıcı IP adresini al
        const userIP = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress

        // //! Eğer kullanıcı giriş yapmışsa userId'yi, giriş yapmamışsa IP adresini kullan
        const userIdentifier = req.user ? req.user._id : null;

        //! Kullanıcının bloga olan view durumunu kontrol et
        const view = await View.findOne({ blogId: req.params.id, $or: [{ userId: userIdentifier }, { userIP: userIP }] })

        if (!view) {
            //! Kullanıcının bloga olan view durumunu ekle
            const view = await View.create({ blogId: req.params.id, userId: userIdentifier, userIP: userIdentifier ? null : userIP })

            //! Blog'un view sayısını güncelle
            await Blog.updateOne({ _id: req.params.id }, { $push: { views: view } })
        }

        const data = await Blog.findOne({ _id: req.params.id }).populate([{ path: "userId", select: "username firstName lastName" }, { path: "categoryId", select: "name" }, { path: "comments", select: "blogId userId comment createdAt updatedAt", populate: { path: "userId", select: "username firstName lastName" } }, { path: "views" }])
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Update Blog"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "categoryId": "65343222b67e9681f937f101", "title": "Blog Title 1", "content": "Blog Content 1", "image": "http://imageURL", "isPublish": true } }
        */

        //! Kullanıcı sadece kendi bloglarını günceleyebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }
        const data = await Blog.updateOne({ _id: req.params.id, ...customFilter }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Blog.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Delete Blog"
        */

        //! Kullanıcı sadece kendi bloglarını silebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }
        const data = await Blog.deleteOne({ _id: req.params.id, ...customFilter })
        res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
    },

    getLike: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Get Like Info"
        */
        const Like = require('../models/like')

        //! Kullanıcın bloga olan like durumunu getir
        const data = await Like.findOne({ blogId: req.params.id, userId: req.user._id })

        //! Blogun toplam like sayısını getir
        const blogData = await Blog.findOne({ _id: req.params.id }).select("likes")
        res.status(200).send({ error: false, userLike: data ? true : false, likes: blogData.likes.length })
    },

    postLike: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Add/Remove Like"
        */
        const Like = require('../models/like')

        //! Kullanıcın bloga olan like durumunu kontrol et
        const data = await Like.findOne({ blogId: req.params.id, userId: req.user._id })

        if (data) {
            //! Kullanıcın bloga olan like durumunu sil
            await Like.deleteOne({ _id: data._id })

            //! Blogun toplam like sayısını azalt
            await Blog.updateOne({ _id: req.params.id }, { $pull: { likes: data._id } })

            //! Güncellenmiş blogu al
            const blogData = await Blog.findOne({ _id: req.params.id }).select("likes")
            res.status(200).send({ error: false, message: "Like removed", userLike: false, likes: blogData.likes.length })
        } else {
            //! Kullanıcının bloga olan like durumunu ekle
            const like = await Like.create({ blogId: req.params.id, userId: req.user._id })

            //! Blogun toplam like sayısını artır
            await Blog.updateOne({ _id: req.params.id }, { $push: { likes: like } })

            //! Güncellenmiş blogu al
            const blogData = await Blog.findOne({ _id: req.params.id }).select("likes")
            res.status(200).send({ error: false, message: "Like added", userLike: true, likes: blogData.likes.length })
        }
    }
}