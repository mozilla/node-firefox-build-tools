# node-firefox-build-tools

Common build tasks and configuration files for the
[node-firefox project](https://github.com/mozilla/node-firefox/).

[![Install with NPM](https://nodei.co/npm/node-firefox-build-tools.png?downloads=true&stars=true)](https://nodei.co/npm/node-firefox-build-tools/)

Right now this is just a set of common gulp tasks and style checks.

## Usage

Install first: `npm install --save-dev node-firefox-build-tools`.

Then you can use it in your `gulpfile.js`:

```javascript
var gulp = require('gulp');
var buildTools = require('node-firefox-build-tools');

buildTools.loadGulpTasks(gulp);
```

## Available tasks

#### `lint`

> Run quality and style checks on your code.

#### `nodeunit`

> Run all nodeunit tests matching `tests/unit/**/test.*.js`

#### `test`

> Run linters and tests. You may want to override this task.

## License

This program is free software; it is distributed under an
[Apache License](https://github.com/mozilla/node-firefox-build-tools/blob/master/LICENSE).

## Copyright

Copyright (c) 2015 [Mozilla](https://mozilla.org)
([Contributors](https://github.com/mozilla/node-firefox-build-tools/graphs/contributors)).
