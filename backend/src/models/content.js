"use strict";

/* --- BLOG API CONTENT MODEL --- */

const { mongoose } = require("../configs/dbConnection");

//? Content Model
const contentSchema = new mongoose.Schema(
    {
        blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true, index: true },

        content: { type: String, required: true, trim: true },

        images: [],
    },
    { collection: "contents", timestamps: true }
)

//? Content Model Export
module.exports = mongoose.model("Content", contentSchema)