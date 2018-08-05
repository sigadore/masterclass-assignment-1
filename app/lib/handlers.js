/*
 *
 * Handler code for JSONapi example
 *
 */

// Dependencies

// Handlers
var handlers = {};

// Hello Handler

// Curent Silly response object
var cannedResponse = {
        'message' : 'Hello World!',
        'assignment' : 'Homework #1',
        'class' : 'Pirple Node.js Masterclass',
        'author' : 'Tim Robertson'
};

handlers.hello = function(data, callback) {
  // Callback httpStatusCode, payload object
  callback(200, cannedResponse);
};

handlers.notFound = function(data, callback) {
  // Callback httpStatusCode
  callback(404);
};

module.exports = handlers;
