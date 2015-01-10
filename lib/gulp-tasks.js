module.exports = function(gulp) {
  'use strict';

  // Include Gulp & Tools We'll Use
  var jscs = require('gulp-jscs');
  var jshint = require('gulp-jshint');
  var nodeunit = require('gulp-nodeunit');
  var jsonlint = require('gulp-json-lint');
  var path = require('path');
  var replace = require('gulp-replace');

  // We manually remove hard tabs from these files and make sure they are
  // valid JSON.
  var nonJSFiles = [
    '.jscsrc',
    '.jshintrc',
    'package.json'
  ];

  var sourceFiles = [
    'examples/**.js',
    'lib/**.js',
    'tests/**/*.js',
    '*.js'
  ];

  // JS Style checks (https://github.com/jscs-dev/node-jscs#readme)
  gulp.task('jscs', function() {
    return gulp.src(sourceFiles)
    .pipe(jscs({ configPath: path.join(__dirname, '../', '.jscsrc') }));
  });

  // Lint JavaScript (http://jshint.com/docs/)
  gulp.task('jshint', function() {
    return gulp.src(sourceFiles)
    .pipe(jshint(path.join(__dirname, '../', '.jshintrc')))
    .pipe(jshint.reporter('jshint-stylish'))
    // Task should fail if JSHint finds errors.
    .pipe(jshint.reporter('fail'));
  });

  // Make sure out package.json and our other JSON files looks nice.
  gulp.task('jsonlint', function() {
    return gulp.src(nonJSFiles)
    .pipe(jsonlint())
    .pipe(jsonlint.report('verbose'));
  });

  // Remove tabs from non-JS files (package.json and JSCS/JSHint configs).
  gulp.task('removetabs', function() {
    return gulp.src(nonJSFiles)
    .pipe(replace(/\t/g, '  '))
    .pipe(gulp.dest('.'));
  });

  // Run Unit tests
  gulp.task('nodeunit', function() {
    return gulp.src('tests/unit/**/test.*.js')
    .pipe(nodeunit());
  });

  gulp.task('lint', ['jshint', 'jscs', 'jsonlint', 'removetabs']);
  gulp.task('test', ['lint', 'nodeunit']);

  gulp.task('default', ['test']);
};
