/*var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Chat\n");
}).listen(port);

console.log("Server running on port " + port);*/


var app  = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;

http.listen(port);
