var http = require('http');
http.createserver(function(request, response)) {
	response.writeHead(200, {'Content-Type': 'text/plain')})
	response.end('hello world\n');
}).listen(80);
console.log("server runs");
