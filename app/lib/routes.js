/*
 *
 * Route code for JSON api example
 *
 */

// Dependecies
var handlers = require('./handlers');

var routes = {
	"hello" : handlers.hello
};

module.exports=routes;