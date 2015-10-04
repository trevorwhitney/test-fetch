#!/usr/bin/env node
var path = require('path');

var currentDir = path.dirname(require.main.filename);
function config() {
  var autoWatch = process.env.NODE_ENV !== 'CI';
  var singleRun = process.env.NODE_ENV === 'CI';

  return {
    basePath: currentDir,
    frameworks: ['jasmine', 'browserify'],
    files: [
      '../**/*.js'
    ],
    exclude: [
      '../support/*.js',
      '../bin/*.js'
    ],
    preprocessors: {
      '../**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [ 'babelify' ]
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: 'WARN',
    browsers: ['Chrome'],
    autoWatch: autoWatch,
    singleRun: singleRun
  };
}

var Server = require('karma/lib/server');
new Server(config()).start();