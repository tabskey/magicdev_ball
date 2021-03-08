const express = require('express')
const app = express()
const path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/home.html'));
})

app.listen(8080, function () {
  console.log('ExampleX   RSZ  app listening on port 8000!')
})