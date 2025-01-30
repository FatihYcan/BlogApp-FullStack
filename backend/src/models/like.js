"use strict"

/* --- BLOG API LIKE  --- */

const { mongoose } = require('../configs/dbConnection');

//? Like Model
const LikeSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
},
{ collection: 'likes', timestamps: true });

//? Like Model Export
if (mongoose.models.Like) {
    console.log('Like modeli zaten tanımlanmış');
} else {
    console.log('Like modeli yeni tanımlandı');
}

const Like = mongoose.model('Like', LikeSchema);
module.exports = Like;
