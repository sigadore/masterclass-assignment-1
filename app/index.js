
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

 	if(trimmedPath === "hello") {
 		// Deliver the object response
 		var payloadString = JSON.stringify(cannedResponse);
 		res.setHeader("Content-Type", "application/json");
 		res.writeHead(200);
 		res.end(payloadString);
 	} else {
 		res.writeHead(404);
 		res.end('ERROR: Page not found!');
 	}
}

// Start the server listening on Port 3000
httpServer.listen(3000, function() {
	console.log("The Server is listening on port 3000");
});