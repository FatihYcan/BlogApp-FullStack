"use strict"

/* --- BLOG API BLOG CONTROLLER --- */

//? Import Blog model
const Blog = require('../models/blog')
const { uploadToCloudinary } = require('../middlewares/upload')

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

        const data = await res.getModelList(Blog, customFilter, [{ path: "categoryId", select: "name" }, { path: "contentsId" }, { path: "likesId", select: "userId", populate: { path: "userId", select: "username image" } }, { path: "userId", select: "username image" }])
        res.status(200).send({ error: false, details: await res.getModelListDetails(Blog, customFilter), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "categoryId": "65343222b67e9681f937f101", "title": "Blog Title 1", "image": [], "isPublish": true } }
        */

        //! userId verisini req.user._id ile al
        req.body.userId = req.user._id

        let data
        if (req.body._id) {
            //! Eğer _id varsa, blogu güncelle
            data = await Blog.findByIdAndUpdate(
                req.body._id,
                { ...req.body },
                { new: true }
            )
        } else {
            //! _id yoksa, yeni bir blog oluştur
            data = await Blog.create({ ...req.body, isPublish: false })
        }
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Get Single Blog"
        */
        const View = require('../models/view')

        //! Cihaz için id yi al
        const userDeviceId = req.headers["x-device-id"] || null

        //! View kontrolü
        if (req.user?._id) {
            const view = await View.findOne({ blogId: req.params.id, userId: req.user._id })

            if (!view) {
                const newView = await View.create({ blogId: req.params.id, userId: req.user._id })

                await Blog.updateOne({ _id: req.params.id }, { $push: { viewsId: newView }, $inc: { viewCount: 1 } })
            }
        } else {
            const view = await View.findOne({ blogId: req.params.id, deviceId: userDeviceId })

            if (!view) {
                const newView = await View.create({ blogId: req.params.id, deviceId: userDeviceId })

                await Blog.updateOne({ _id: req.params.id }, { $push: { viewsId: newView }, $inc: { viewCount: 1 } })
            }
        }

        const data = await Blog.findOne({ _id: req.params.id }).populate([{ path: "categoryId", select: "name" }, { path: "commentsId", select: "bottomCommentsId userId comment createdAt", populate: [{ path: "bottomCommentsId", select: "userId bottomComment createdAt", populate: { path: "userId", select: "username image" } }, { path: "userId", select: "username image" }] }, { path: "contentsId" }, { path: "likesId", select: "userId", populate: { path: "userId", select: "username image" } }, { path: "userId", select: "username image" }])

        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Update Blog"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "categoryId": "65343222b67e9681f937f101", "title": "Blog Title 1", "image": [], "isPublish": true } }
        */

        //! Kullanıcı sadece kendi bloglarını günceleyebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }

        //! Eğer kullanıcı resim eklediyse
        if (req.file) {
            const imageUrl = await uploadToCloudinary(req.file.path, "blog_images");
            req.body.image = imageUrl;
        }
        //! Eğer kullanıcı resmi değiştirmediyse
        else {
            req.body.image = Blog.image;
        }

        const data = await Blog.updateOne({ _id: req.params.id, ...customFilter }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Blog.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Delete Blog"
        */

        const Content = require("../models/content");
        const View = require("../models/view");
        const Like = require("../models/like");
        const Comment = require("../models/comment");
        const BottomComment = require("../models/bottomcomment");

        //! Kullanıcı sadece kendi bloglarını silebilir.
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }

        const blog = await Blog.findOne({ _id: req.params.id, ...customFilter });

        //! Bloga ait içerikleri, görüntülemeleri, beğenileri ve yorumları, yorumların içindeki yorumları sil.
        await Content.deleteMany({ _id: { $in: blog.contentsId } });
        await View.deleteMany({ _id: { $in: blog.viewsId } });
        await Like.deleteMany({ _id: { $in: blog.likesId } });
        await BottomComment.deleteMany({ commentId: { $in: blog.commentsId } });
        await Comment.deleteMany({ _id: { $in: blog.commentsId } });

        const data = await Blog.deleteOne({ _id: req.params.id, ...customFilter })
        res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
    },

    createId: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog ID (Draft)"
            #swagger.description = "Create a draft blog and return its ID without saving it."
        */

        //! userId verisini req.user._id ile al
        req.body.userId = req.user._id;
        req.body.isPublish = false;

        //! Yüklenen resmin yolunu ayarla
        const imageUrl = await uploadToCloudinary(req.file.path, "blog_images");
        req.body.image = imageUrl;

        //! Blog'u oluştur ve ID'sini al
        const data = await Blog.create(req.body)

        res.status(200).send({ error: false, data });
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
        const blogData = await Blog.findOne({ _id: req.params.id })
        res.status(200).send({ error: false, userLike: data ? true : false, likesId: blogData.likesId.length, likeCount: blogData.likeCount })
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
            await Blog.updateOne({ _id: req.params.id }, { $pull: { likesId: data._id }, $inc: { likeCount: -1 } })

            //! Güncellenmiş blogu al
            const blogData = await Blog.findOne({ _id: req.params.id })

            res.status(200).send({ error: false, message: "Like removed", userLike: false, likesId: blogData.likesId.length, likeCount: blogData.likeCount })
        } else {
            //! Kullanıcının bloga olan like durumunu ekle
            const like = await Like.create({ blogId: req.params.id, userId: req.user._id })

            //! Blogun toplam like sayısını artır
            await Blog.updateOne({ _id: req.params.id }, { $push: { likesId: like }, $inc: { likeCount: 1 } })

            //! Güncellenmiş blogu al
            const blogData = await Blog.findOne({ _id: req.params.id })

            res.status(200).send({ error: false, message: "Like added", userLike: true, likesId: blogData.likesId.length, likeCount: blogData.likeCount })
        }
    },
}