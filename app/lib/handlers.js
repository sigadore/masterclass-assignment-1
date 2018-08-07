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
var helpers = require('./helpers');


// Handler functions


module.exports=lib;
var handlers = {};

// Hello Handler

// Curent Silly response object for "Hello" output
var cannedResponse = {
        'message' : 'Hello World!',
        'assignment' : 'Homework #1',
        'class' : 'Pirple Node.js Masterclass',
        'author' : 'Tim Robertson'
};

lib.hello = function(data, callback) {
  // Callback httpStatusCode, payload object
  callback(200, cannedResponse);
};


// Not Found Handler

lib.notFound = function(data, callback) {
  // Callback httpStatusCode
  callback(404);
};



var lib = {};
