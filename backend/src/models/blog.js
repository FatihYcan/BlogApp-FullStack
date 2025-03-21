"use strict";

/* --- BLOG API BLOG MODEL --- */

const { mongoose } = require("../configs/dbConnection");
const Like = require("./like");
const View = require("./view");

//? Blog Model
const blogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true, },

    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true, index: true, },

    title: { type: String, required: true, trim: true },

    contents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }],

    blogImage: [],

    views: [{ type: mongoose.Schema.Types.ObjectId, ref: View.modelName }],

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: Like.modelName }],

    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

    viewCount: { type: Number, default: 0 },

    isPublish: { type: Boolean, default: true },
  },
  { collection: "blogs", timestamps: true }
)

//? Blog Model Export
module.exports = mongoose.model("Blog", blogSchema);
