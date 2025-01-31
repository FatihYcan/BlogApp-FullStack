"use strict"

/* --- BLOG API LOGGING --- */

const morgan = require('morgan')

//? Write to file day by day
const fs = require("node:fs")
const now = new Date()
const today = now.toISOString().split("T")[0]

module.exports = morgan("combined", { stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" }) })