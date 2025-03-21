"use strict";

/* --- BLOG API CONTENT MODEL --- */

const { mongoose } = require("../configs/dbConnection");

//? Content Model
const contentSchema = new mongoose.Schema(
    {
        blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true, index: true },

        sectionTitle: { type: String, required: true, trim: true },

        text: { type: String, required: true, trim: true },

        order: { type: Number, default: 0 },

        images: [
            {
                url: { type: String, required: true },
                caption: { type: String, trim: true }
            }
        ],
    },
    {
        collection: "contents", timestamps: true
    }
)

//? Content Model Export
module.exports = mongoose.model("Content", contentSchema);