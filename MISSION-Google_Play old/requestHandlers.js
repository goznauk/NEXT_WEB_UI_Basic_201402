var exec = require("child_process").exec;

function main(response) {
	console.log("Request handler 'main' was called.");

	var fs = require("fs");
	fs.readFile("./static/test.html", function(error, data) {
		if(error) {
			console.log("file load error");
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(data);
			response.end();
		}
	});
}

function start(response) {
	console.log("Request handler 'start' was called.");

	exec("ls -lah", function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

function loadStatic(response, request) {
	console.log("Request handler 'loadStatic' was called.");

	var fs = require("fs");
	var path = require("path");

	var filePath = "./static" + request.url;
	var extname = path.extname(filePath);

//	console.log(filePath + "/" + extname);

	var contentType = "text/html";
	switch(extname) {
		case ".js" :
			contentType = "text/javascript";
			break;
		case ".css" :
			contentType = "text/css";
			break;
	}

	path.exists(filePath, function(exists) {	
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
					console.log("file load failed");
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
					console.log("file loaded");
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
			console.log("not exists");
		}
	});
/*
	fs.readFile(, function(error, data) {

		if(error) {
			console.log("file load error");
		} else {
			response.writeHead(200, {"Content-Type": "text/css"});
			response.write(data);
			response.end();
		}
	});*/
}

exports.main = main;
exports.start = start;
exports.upload = upload;
exports.loadStatic = loadStatic;