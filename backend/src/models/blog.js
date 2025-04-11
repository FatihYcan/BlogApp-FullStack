"use strict";

/* --- BLOG API BLOG MODEL --- */

const { mongoose } = require("../configs/dbConnection");
const Like = require("./like");
const View = require("./view");

//? Blog Model
const blogSchema = new mongoose.Schema(
  {
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true, index: true, },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true, },
    
    commentsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

    contentsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }],

    likesId: [{ type: mongoose.Schema.Types.ObjectId, ref: Like.modelName }],

    viewsId: [{ type: mongoose.Schema.Types.ObjectId, ref: View.modelName }],

    title: { type: String, required: true, trim: true },

    image: [],

    viewCount: { type: Number, default: 0 },

    likeCount: { type: Number, default: 0 },

    isPublish: { type: Boolean, default: true },
  },
  { collection: "blogs", timestamps: true }
)

//? Blog Model Export
module.exports = mongoose.model("Blog", blogSchema);
