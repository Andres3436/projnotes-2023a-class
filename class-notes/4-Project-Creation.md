# Adding Babel

## Introduction
At first, languages were designed solely to be able to run programs efficiently. Early languages still in use have periodic revisions to reflect influences from other areas of computing. Languages like Java, C++, and ML reflect a wealth of experience gained from designing and using hundreds of older languages.

## Methods
1.	Install babel (and eslint):
$ npm install --save-dev babel babel-core babel-loader babel-eslint eslint eslint-loader
2.	Add .babelrc and .eslintrc (if you want eslint, which you probably do)
3.	Update your webpack config as above
4.	Any .es6 file in your project will be built with babel! You can rename existing files, or just use it as you create new files.
5.	Tell your editor that .es6 files are JavaScript

## Results
var webpack = require('webpack');

module.exports = {
  ...,
  resolve: {
    ...,
    // Add .es6 to the set of extension that will be resolved
    // This means that `require('foo')` will find either `foo.js` or `foo.es6`
    extensions: ['', '.js', '.es6'],
  },
  module: {
    preLoaders: [
      // If you use eslint
      { test: /\.es6$/, loader: 'eslint-loader' },
    ],
    loaders: [
      ...,
      // Add the babel-loader
      { test: /\.es6$/, loader: 'babel' },
    ]
  },
};

## Discussions
Adding Babel (ES6) to a legacy project being built with webpack

## Reference
1. https://docplayer.es/20964588-Tema-1-lenguajes-de-programacion.html
2. https://gist.github.com/wolever/5c9e6d27b146db225736


