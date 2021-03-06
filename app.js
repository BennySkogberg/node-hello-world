/* Hello World! program in Node.js */

console.log('Hello World!')

var http = require('http')

http.createServer(function (request, response) {
  // Send the HTTP Header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'})

  // Send the response body as 'Hello World'
  response.end('Hello World from app.js\n')
}).listen(4000)

// Console will print the message
console.log('Server running at http://localhost:4000')
