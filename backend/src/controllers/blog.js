"use strict"

/* --- BLOG API BLOG CONTROLLER --- */

//? Import Blog model
const Blog = require('../models/blog')
const { uploadToCloudinary } = require('../middlewares/upload')
const crypto = require('crypto')
const { normalizeDevice } = require('../helpers/normalizeDevice')

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

        const data = await res.getModelList(Blog, customFilter, [{ path: "userId", select: "username image" }, { path: "categoryId", select: "name" }, { path: "contents" }, { path: "likes", select: "userId", populate: { path: "userId", select: "username image" } }])
        res.status(200).send({ error: false, details: await res.getModelListDetails(Blog, customFilter), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "categoryId": "65343222b67e9681f937f101", "title": "Blog Title 1", "contents": ["65343222b67e9681f937f102", "65343222b67e9681f937f103"], "image": [], "isPublish": true } }
        */

        //! userId verisini req.user._id ile al
        req.body.userId = req.user._id

        // if (req.file) {
        //     req.body.image = "./uploads/blog/" + req.file.filename
        // }

        // if (!req.body.image && req.file) {
        //     req.body.image = await uploadToCloudinary(req.file.path, "blog_images");
        // }

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

        //! Cihaz bilgilerini al
        const userIp = req.ip
        const userIpSegment = userIp.split('.').slice(0, 3).join('.')
        const userAgent = req.headers['user-agent'] || 'unknown_agent'
        const platform = req.headers['sec-ch-ua-platform'] || 'unknown_platform'
        const acceptLanguage = req.headers['accept-language'] || 'unknown'
        const connection = req.headers['connection'] || 'keep-alive'
        const deviceInfo = normalizeDevice(userAgent)

        const deviceUUID = req.cookies.deviceUUID || req.headers['device-uuid']

        //! Benzersiz cihaz kimliği oluştur
        const deviceId = crypto.createHash('sha256').update(`${deviceInfo}_${platform}_${acceptLanguage}_${userAgent.length}_${connection}_${userIpSegment}_${deviceUUID || ''}`).digest('hex')

        //! View kontrolü
        if (req.user?._id) {
            const view = await View.findOne({ blogId: req.params.id, userId: req.user._id })

            if (!view) {
                const newView = await View.create({ blogId: req.params.id, userId: req.user._id, deviceId: deviceId, deviceModel: deviceInfo })

                await Blog.updateOne({ _id: req.params.id }, { $push: { views: newView }, $inc: { viewCount: 1 } })
            }
        } else {
            const view = await View.findOne({ blogId: req.params.id, deviceId: deviceId })

            if (!view) {
                const newView = await View.create({ blogId: req.params.id, deviceId: deviceId, deviceModel: deviceInfo })

                await Blog.updateOne({ _id: req.params.id }, { $push: { views: newView }, $inc: { viewCount: 1 } })
            }
        }

        const data = await Blog.findOne({ _id: req.params.id }).populate([{ path: "userId", select: "username image" }, { path: "contents" }, { path: "categoryId", select: "name" }, { path: "likes", select: "userId", populate: { path: "userId", select: "username image" } }, { path: "comments", select: "userId comment bottomcomments createdAt", populate: [{ path: "userId", select: "username image" }, { path: "bottomcomments", select: "userId comment createdAt", populate: { path: "userId", select: "username image" } }] }])

        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "categoryId": "65343222b67e9681f937f101", "title": "Blog Title 1", "contents": ["65343222b67e9681f937f102", "65343222b67e9681f937f103"], "image": [], "isPublish": true } }
        */

        //! Kullanıcı sadece kendi bloglarını günceleyebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }

        //! Eğer kullanıcı resim eklediyse
        // if (req.file) {
        //     req.body.image = "./uploads/blog/" + req.file.filename;
        // }
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
        await Content.deleteMany({ _id: { $in: blog.contents } });
        await View.deleteMany({ _id: { $in: blog.views } });
        await Like.deleteMany({ _id: { $in: blog.likes } });
        await BottomComment.deleteMany({ commentId: { $in: blog.comments } });
        await Comment.deleteMany({ _id: { $in: blog.comments } });

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

        //! Eğer dosya yüklendiyse, resim yolunu ayarla
        // if (req.file) {
        //     req.body.image = "./uploads/blog/" + req.file.filename;
        // }
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
    },
}