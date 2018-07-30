/*var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Chat\n");
}).listen(port);

console.log("Server running on port " + port);*/


/*var app  = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;
http.listen(port);*/


/*var express = require('express');
var app = express();
var port1 = process.env.PORT || 8080;

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(port1, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})*/

var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Chat\n");
});


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
