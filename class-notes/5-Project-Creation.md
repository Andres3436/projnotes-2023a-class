# Updating to ES6

## Introduction
ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.
ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.

## Methods
Changed was VAR to CONST. The CONST function: This declaration creates a constant whose scope can be global or local to the block in which it is declared.
Changed to FUNCTION but here the appropriate thing is to put this "=>". A function is a block of code that performs some operation.
change was the LET part, it was written where they are within the functions or the parentheses like these “{ }”. The LET function assigns names to the results of calculations.
the EXPORT DEFAULT ROUTER. is a common practice in JavaScript, to create modules that export a single value.

## Results
Code for bin/www.js:
// bin/www.js
/**
 * Module dependencies.
 */
import app from '../app';
import debugLib from 'debug';
import http from 'http';
const debug = debugLib('your-project-name:server');
// ..generated code below.

Code for routes/index.js and routes/users.js:
// routes/index.js and users.js
import express from 'express';
var router = express.Router();
// ..stuff below
export default router;

## Discussions
Transpiling step and deleting might slow down your development environment. Plus, ES Modules, is almost coming to node. But, nevertheless, this is a good eductational material to understand how transipiling runs under the hood like when we are developing front-end apps.

## Referencias
1. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
