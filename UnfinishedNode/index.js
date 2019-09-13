var http = require("http");
var fs = require('fs');
var url = require('url');
var enrollStudent = require('./enroll');


var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
  var path = url.parse(request.url, true);
  var sub = path.pathname.split("/");
  var filename;

  if (path.pathname === '/') {
    filename = "index.html";

  } else if (path.pathname == "/class/" + sub[sub.length - 1]) {
    filename = sub[sub.length - 1] + ".csv";

  } else if (path.pathname === '/enroll') {
    filename = "index.html";
    enrollStudent.enroll(request);

  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    return response.end("404 Not Found");
  }

  fs.readFile(filename, function (err, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);  
  });

}); server.listen(3001)