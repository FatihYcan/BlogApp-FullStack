"use strict"

/* --- BLOG API UPLOAD --- */

const multer = require("multer")
const path = require("path");

module.exports = multer({
    storage: multer.diskStorage({
        destination: "./uploads",
        filename: (req, file, callback) => {
            callback(null, Date.now() + "-" + file.originalname)
        }
    }),
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|webp/
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
        const mimetype = filetypes.test(file.mimetype)
        if (mimetype && extname) {
            return cb(null, true)
        } else {
            cb(new Error("Sadece JPEG, JPG, PNG, GIF ve WEBP formatındaki resim dosyalarına izin verilir!"))
        }
    }
})
