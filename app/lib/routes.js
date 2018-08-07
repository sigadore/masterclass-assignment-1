/*
 * Project: Pirple Node.js Masterclass assignment 1
 * Description: Primary API service handler library
 * Author: Tim Robertson
 *
 * Based on work product provided during the class.
 *
 * Note: Most of this initial release is hardcoded
 *  and supports only http requests.
 */


// Dependencies

var handlers = require('./handlers');

var routes = {
	"hello" : handlers.hello
};

module.exports=routes;