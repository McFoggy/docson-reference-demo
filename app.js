var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// let's serve public folder
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
