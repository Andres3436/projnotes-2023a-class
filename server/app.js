// Helps to handle http errors
const createError = require('http-errors');
import createError from 'http-errors'
// Import the Express Library
const express = require('express');
import express from 'express';
// Is a Core-Node library to manage system paths
const path = require('path');
import path from 'path'
// Helps to parse client cookies
const cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
// Library to log http communication
const logger = require('morgan');
import logger from 'morgan'

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
import indexRouter from './routes/index' 
import usersRouter from './routes/users';
import apiRouter from './routes/api';

// We are creating the express instance
const app = express();

// view engine setup
// We are delcaring the localization of the views
app.set('views', path.join(__dirname, 'views'));
// Setting up
app.set('view engine', 'hbs');

// Registering middlewares
// Log all received request
app.use(logger('dev'));
// Parse request data into json
app.use(express.json());
// Decode the url info
app.use(express.urlencoded({ extended: false }));
// Parse client cookies into json
app.use(cookieParser());
// Set up static file server
app.use(express.static(path.join(__dirname, 'public')));

// Registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
