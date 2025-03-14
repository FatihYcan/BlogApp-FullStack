"use strict";

/* --- BLOG API UPLOAD --- */

const multer = require("multer");
const path = require("path");

const fixFileName = (fileName) => {
    return Buffer.from(fileName, "latin1").toString("utf8")
        .replace(/Ä/g, "ğ")
        .replace(/Ä±/g, "ı")
        .replace(/Ã¼/gi, "ü")
        .replace(/Ã§/gi, "ç")
        .replace(/Ã¶/gi, "ö")
        .replace(/Å/gi, "ş")
        .replace(/Ä°/g, "İ")
        .replace(/Ã/g, "Ö")
        .replace(/Ã/g, "Ç")
        .replace(/Ãœ/gi, "Ü");
};

const blogStorage = multer.diskStorage({
    destination: "./uploads/blog",
    filename: (req, file, callback) => {
        const fixedName = fixFileName(file.originalname);
        callback(null, Date.now() + "-" + fixedName);
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
            cb(new Error("Only image files in JPEG, JPG, PNG, GIF and WEBP formats are allowed!"));
        }
    }
});

const userStorage = multer.diskStorage({
    destination: "./uploads/user",
    filename: (req, file, callback) => {
        const fixedName = fixFileName(file.originalname);
        callback(null, Date.now() + "-" + fixedName);
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
            cb(new Error("Only image files in JPEG, JPG, PNG, GIF and WEBP formats are allowed!"));
        }
    }
});

module.exports = { blogUpload, userUpload };
