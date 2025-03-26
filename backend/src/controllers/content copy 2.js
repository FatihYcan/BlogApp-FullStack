"use strict"

/* --- BLOG API CONTENT CONTROLLER --- */

//? Import Content model
const Content = require('../models/content')

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
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "blogId": "65343222b67e9681f937f101", "sectionTitle": "Section Title 1", "text": "Section Content 1", "order": 1, "images": [ { "url": "uploads/images/resim1.jpg", "caption": "Resim 1 açıklaması } ] } }
        */

        const Blog = require('../models/blog')

        //! userId verisini req.user._id ile al
        req.body.userId = req.user._id

        if (req.files && req.files.length > 0) {
            req.body.images = req.files.map(file => "./uploads/content/" + file.filename);
        }

        const data = await Content.create(req.body)

        //! Kullanıcının bloga olan contents durumunu ekle
        await Blog.updateOne({ _id: data.blogId }, { $push: { contents: data._id } })
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
            #swagger.parameters['body'] = { in: 'body', required: true, schema: { "blogId": "65343222b67e9681f937f101", "sectionTitle": "Section Title 1", "text": "Section Content 1", "order": 1, "images": [ { "url": "uploads/images/resim1.jpg", "caption": "Resim 1 açıklaması } ] } }
        */

        //! Kullanıcı sadece kendi içeriklerini günceleyebilir
        let customFilter = {}
        if (!req.user.isAdmin) {
            customFilter = { userId: req.user._id }
        }

        //! Mevcut content resimlerini getir
        const content = await Content.findOne({ _id: req.params.id }, { images: 1, _id: 0 })

        console.log("content.images", content.images)
        console.log("req.files", req.files)
        console.log("req.files.length", req.files.length)
        console.log("!req.body.images", !req.body.images)
        console.log("req.body.images", req.body.images)
        // console.log("req.body.images.length", req.body.images.length)


        if (req.files.length === 0 && !req.body.images && req.body.images.length === 0) {
            console.log("Bütün resimler silindi");
            content.images = []

            //! Güncellenmiş resimleri req.body'ye ekle
            req.body.images = content.images


        } else if (req.files && req.files.length > 0 && !req.body.images) {
            console.log("Bütün resimler silinip farklı resimler eklendi");
            content.images = []

            //! Yeni resimleri ekle
            for (let file of req.files) {
                content.images.push("./uploads/content/" + file.filename)
            }

            //! Güncellenmiş resimleri req.body'ye ekle
            req.body.images = content.images



        } else if (req.files && req.files.length > 0 && req.body.images && req.body.images.length > 0) {
            console.log("Resim/resimler eklendi");

            //! Yeni resimleri ekle
            for (let file of req.files) {
                content.images.push("./uploads/content/" + file.filename)
            }

            //! Güncellenmiş resimleri req.body'ye ekle
            req.body.images = content.images

        } else {
            console.log("Hiçbir resim eklenmedi");
            req.body.images = content.images
        }

        // else if (req.files && req.files.length > 0) {
        // console.log("Yeni resimler eklendi");
        // } else if (content.images && content.images.length > 0) {
        // console.log("Hiçbir yeni resim eklenmedi, eski resimler kullanılıyor");

        // } else {
        // console.log("Bütün resimler silinip farklı resimler eklendi");
        // if (req.files && req.files.length > 0) {
        // console.log("Bütün resimler silinip farklı resimler eklendi 1");
        // }
        // }

        // //! Eğer kullanıcı resim eklediyse
        // if (req.files) {

        //     //! Yeni resimleri ekle
        //     for (let file of req.files) {
        //         content.images.push("./uploads/content/" + file.filename)
        //     }

        //     //! Güncellenmiş resimleri req.body'ye ekle
        //     req.body.images = content.images
        // }

        // // //! Eğer kullanıcı bütün resimleri sildiyse
        // if (req.files.length === 0 && req.body.images.length === 0) {
        //     content.images = []
        //     req.body.images = []

        //     console.log(content.images)

        //     //! Güncellenmiş resimleri req.body'ye ekle
        //     req.body.images = content.images
        // }

        const data = await Content.updateOne({ _id: req.params.id, ...customFilter }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Content.findOne({ _id: req.params.id }) })
    },

    // if (req.files.length === 0 && !req.body.images && req.body.images.length === 0) {
    //     content.images = [];
    //     req.body.images = [];

    //     //! Güncellenmiş resimleri req.body'ye ekle
    //     req.body.images = content.images
    // }

    // //! Eğer kullanıcı resim eklediyse
    // if (req.files && req.files.length > 0) {
    //     //! Yeni resimleri ekle
    //     for (let file of req.files) {
    //         content.images.push("./uploads/content/" + file.filename)
    //     }
    // }

    //     //! Güncellenmiş resimleri req.body'ye ekle
    //     req.body.images = content.images
    // }

    //! Güncellenmiş resimleri req.body'ye ekle
    // req.body.images = content.images


    // //! Eğer kullanıcı tüm resimleri silmişse ve farklı resim eklemişse, content.images dizisini temizle
    // if (!req.body.images || req.body.images.length === 0) {
    //     content.images = []
    // }

    //! Eğer kullanıcı resmi sildiyse
    // else if (req.body.images && req.body.images.length > 0) {
    //     content.images = req.body.images
    // }

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