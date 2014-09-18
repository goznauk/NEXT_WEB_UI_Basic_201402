var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.main;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/main.css"] = requestHandlers.loadStatic;
handle["/main.js"] = requestHandlers.loadStatic;

server.start(router.route, handle);