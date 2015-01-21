#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');

var filesToCopy = [
  '.travis.yml',
  'gulpfile.js'
];

function copyFileSync(srcFile, destFile, encoding) {
  var content = fs.readFileSync(srcFile, encoding);
  fs.writeFileSync(destFile, content, encoding);
}

filesToCopy.forEach(function(filename) {
  copyFileSync(path.join(__dirname, '../', 'support', filename), filename);
  console.log('Adding', filename);
});

console.log('Build tools for node-firefox installed!');
