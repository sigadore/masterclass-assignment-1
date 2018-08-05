/*
 *
 * Handler code for JSONapi example
 *
 */

// Dependencies

// Handlers
var handlers = {};

// Hello Handler

handlers.hello = function(data, callback) {
  // Callback httpStatusCode, payload object
  callback(200, cannedResponse);
};

handlers.notFound = function(data, callback) {
  // Callback httpStatusCode
  callback(404);
};

module.exports = handlers;