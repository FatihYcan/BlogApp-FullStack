"use strict"

/* --- BLOG API CONTENT CONTROLLER --- */

//? Import Content model
const Content = require('../models/content')
const { uploadToCloudinary } = require('../middlewares/upload')

module.exports = {
    list: async (req, res) => {
        /*       
            #swagger.tags = ["Contents"]
            #swagger.summary = "List Contents"
            #swagger.description = `You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul>
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>`
        */

        const data = await res.getModelList(Content)
        res.status(200).send({ error: false, details: await res.getModelListDetails(Content), data })
    },

    create: async (req, res) => {
        /*
             #swagger.tags = ["Contents"]
            #swagger.summary = "Create Content"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "blogId": "65343222b67e9681f937f101", "content": "Content 1", "images": [] } }
        */

        const Blog = require('../models/blog')

        //! userId verisini req.user._id ile al
        req.body.userId = req.user._id

        //! Eğer kullanıcı resim eklediyse
        if (req.files && req.files.length > 0) {
            const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.path, "content_images"));
            req.body.images = await Promise.all(imageUploadPromises);
        }

        const data = await Content.create(req.body)

        //! Kullanıcının bloga olan contents durumunu ekle
        await Blog.updateOne({ _id: data.blogId }, { $push: { contentsId: data._id } })
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Contents"]
            #swagger.summary = "Get Single Content"
        */

        const data = await Content.findOne({ _id: req.params.id })
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
             #swagger.tags = ["Contents"]
            #swagger.summary = "Create Content"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "blogId": "65343222b67e9681f937f101", "content": "Content 1", "images": [] } }
        */

        //! Kullanıcı sadece kendi içeriklerini günceleyebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }

        //! Mevcut content resimlerini getir
        const content = await Content.findOne({ _id: req.params.id }, { images: 1, _id: 0 })

        //! Eğer bütün resimler silinip farklı resimler eklenirse
        if (req.files.length > 0 && !req.body.images) {
            content.images = []

            //! Yeni resimleri ekle
            const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.path, "content_images"));
            content.images = await Promise.all(imageUploadPromises);

            //! Güncellenmiş resimleri req.body'ye ekle
            req.body.images = content.images
        }

        //! Eğer bütün resimler silinirse
        else if (req.body.images.length === 0) {
            content.images = []

            //! Güncellenmiş resimleri req.body'ye ekle
            req.body.images = content.images
        }

        //! Eğer yeni resim eklenirse/hiç resim eklenmezse/hiç resim silinmezse
        else if (req.files && content.images.length === req.body.images.length) {

            //! Yeni resimleri ekle
            const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.path, "content_images"));
            const newImages = await Promise.all(imageUploadPromises);

            content.images.push(...newImages);

            //! Güncellenmiş resimleri req.body'ye ekle
            req.body.images = content.images
        }

        //! Eğer birkaç resim silinip başka resim eklenirse
        else if (req.files && content.images.length !== req.body.images.length) {
            let updatedImages = content.images.filter(img => req.body.images.includes(img));

            const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.path, "content_images"));
            const newImages = await Promise.all(imageUploadPromises);

            updatedImages.push(...newImages);

            //! Güncellenmiş resimleri req.body'ye ekle
            req.body.images = updatedImages
        }

        const data = await Content.updateOne({ _id: req.params.id, ...customFilter }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Content.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Contents"]
            #swagger.summary = "Delete Content"
        */

        //! Kullanıcı sadece kendi içeriklerini silebilir.
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }
        const data = await Content.deleteOne({ _id: req.params.id, ...customFilter })
        res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
    },
}