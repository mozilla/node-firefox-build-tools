'use strict';

var gulp = require('gulp');
var buildTools = require('./index.js');

buildTools.loadGulpTasks(gulp);

gulp.task('test', ['lint']);
