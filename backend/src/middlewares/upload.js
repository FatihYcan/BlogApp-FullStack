"use strict"

/* --- BLOG API UPLOAD --- */

const multer = require("multer")
module.exports = multer({
    storage: multer.diskStorage({
        destination: "./uploads",
        filename: (req, file, callback) => {
            callback(null, Date.now() + "-" + file.originalname)
        }
    })
})
