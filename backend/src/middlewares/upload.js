"use strict"

/* --- BLOG API UPLOAD --- */

const multer = require("multer")
const path = require("path");

const blogStorage = multer.diskStorage({
    destination: "./uploads/blog",
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname);
    }
});

const blogUpload = multer({
    storage: blogStorage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|webp/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error("Sadece JPEG, JPG, PNG, GIF ve WEBP formatındaki resim dosyalarına izin verilir!"));
        }
    }
});

const userStorage = multer.diskStorage({
    destination: "./uploads/user",
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname);
    }
});

const userUpload = multer({
    storage: userStorage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|webp/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error("Sadece JPEG, JPG, PNG, GIF ve WEBP formatındaki resim dosyalarına izin verilir!"));
        }
    }
});

module.exports = { blogUpload, userUpload };