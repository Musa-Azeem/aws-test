const serverless = require("serverless-http");
const express = require('express')


const app = express()

app.get('/', (req, res) => {    // request, response
    res.json({mssg: 'Welcome to the app'})
})

// AWS Lambda

module.exports.handler = serverless(app);