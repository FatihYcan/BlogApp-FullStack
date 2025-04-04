"use strict"

/* --- BLOG API CATEGORY CONTROLLER --- */

//? Import Category model
const Category = require('../models/category')

module.exports = {
    list: async (req, res) => {
        /*       
            #swagger.tags = ["Categories"]
            #swagger.summary = "List Categories"
            #swagger.description = `You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul>
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>`
        */
        const data = await res.getModelList(Category)
        res.status(200).send({ error: false, details: await res.getModelListDetails(Category), data })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Create Category"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: {  "name": "Category 1"} }
        */
        const data = await Category.create(req.body)
        res.status(201).send({ error: false, data })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Get Single Category"
        */
        const data = await Category.findOne({ _id: req.params.id })
        res.status(200).send({ error: false, data })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Update Category"
            #swagger.parameters['body'] = { in: 'body', required: true, schema: {  "name": "Category 1"} }
        */
        const data = await Category.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
        res.status(200).send({ error: false, data, new: await Category.findOne({ _id: req.params.id }) })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Delete Category"
        */

        const Blog = require('../models/blog')

        //! Bu category ait blogları getir
        const blogs = await Blog.find({ categoryId: req.params.id })

        //! Bu category ait blog varsa silme yoksa sil
        if (blogs.length > 0) {
            res.errorStatusCode = 400
            throw new Error("This category has blogs, cannot delete.")
        } else {
            const data = await Category.deleteOne({ _id: req.params.id })
            res.status(data.deletedCount ? 204 : 404).send({ error: !data.deletedCount, data })
        }
    },
}