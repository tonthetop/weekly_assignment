const express = require('express')
const app = express()
var morgan = require('morgan')
const bai3 = require("./Js_test/bai3")


app.use(morgan('combined'))

app.get('/bai3', bai3)

app.get('/', function(req, res) {
    res.send('Hello World')
})
console.log('Listening on http://localhost:3000')
app.listen(3000)