
/*
 * Project: Pirple Node.js Masterclass assignment 1
 * Description: Primary API service
 * Author: Tim Robertson
 *
 * Based on work product provided during the class.
 *
 * Note: Most of this initial release is hardcoded
 *  and supports only http requests.
 */

// Dependencies
var http=require('http');
var url=require('url');

var routes = require('./lib/routes');

// Curent Silly response object
var cannedResponse = {
	'message' : 'Hello World!',
	'assignment' : 'Homework #1',
	'class' : 'Pirple Node.js Masterclass',
	'author' : 'Tim Robertson'
};

// The server responds to all requests
var httpServer = http.createServer(function(req,res){
   // Delegate to the request processor
   processRequest(req,res);
});

// Process the request from the server.
var processRequest = function(req,res) {
 	
 	// Parse the URL from the Request
 	var parsedUrl = url.parse(req.url,true);

 	// Get the path and trim outside "/" off
 	var trimmedPath= parsedUrl.pathname.replace(/^\/+|\/+$/g,'');

 	var handler = (handlers[trimmedPath] === undefined)?handlers.notFound:handlers[trimmedPath];
    handler(req, function(statusCode, outputPayload){
    	statusCode = (typeof(statusCode) === undefined)?200:statusCode;
  		// Deal with object output
    	if(typeof(outputPayload === "Object")) {
 			// Deliver the object response
 			outputPayload = JSON.stringify(outputPayload);
 			res.setHeader("Content-Type", "application/json");
 		} else if(typeofPayload === "undefined") {
 			outputPayload="";
 		}
 		res.writeHead(statusCode);
 		res.end(outputPayload);

    });
}

// Start the server listening on Port 3000
httpServer.listen(3000, function() {
	console.log("The Server is listening on port 3000");
});

