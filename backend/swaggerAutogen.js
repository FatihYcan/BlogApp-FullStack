"use strict"
/* -------------------------------------------------------
	EXPRESS - BLOG API
------------------------------------------------------- */
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000
/* ------------------------------------------------------- */
const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const document = {
	info: {
		version: packageJson.version,
		title: "Blog API",
		description: packageJson.description,
		termsOfService: "",
		contact: { name: "Fatih Can", email: "f.yakutcan.32@gmail.com" },
		license: { name: packageJson.license, },
	},
	host: "https://koseyazisi.onrender.com",
	basePath: '/',
	schemes: ['http', 'https'],
	consumes: ["application/json"],
	produces: ["application/json"],
	securityDefinitions: {
		Token: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'Simple Token Authentication * Example: <b>Token ...tokenKey...</b>'
		},
	},
	security: [{ Token: [] }, { Bearer: [] }],
	definitions: {
		// Models:
		"Blog": require('./src/models/blog').schema.obj,
		"Bottom Comment": require('./src/models/bottomcomment').schema.obj,
		"Category": require('./src/models/category').schema.obj,
		"Comment": require('./src/models/comment').schema.obj,
		"Content": require('./src/models/content').schema.obj,
		"User": require('./src/models/user').schema.obj,
	}
}

const routes = ['./index.js']
const outputFile = './src/configs/swagger.json'

// Create JSON file:
swaggerAutogen(outputFile, routes, document)