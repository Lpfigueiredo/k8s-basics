const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World. Env: ' + process.env.TEST)
})

app.listen(3000)