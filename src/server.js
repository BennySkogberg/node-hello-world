var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World from server.js')
})

var server = app.listen(4000, function () {
  var port = server.address().port

  console.log('Example app listening at http://localhost:%s', port)
})
