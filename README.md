# generator-engular [![Build Status](https://secure.travis-ci.org/elmccd/generator-engular.png?branch=master)](https://travis-ci.org/elmccd/generator-engular)

> Yeoman generator for Angular projects with:
> * [Modular code organization](#modular-code-organization)
> * [Subgenerators](#subgenerators)
> * [Gulp build system](#Gulp-tasks)
> * support for SASS/LESS/Stylus
> * [live ngdocs documentation](#ngdocs)
> * [Unit and e2e tests](#tests)
> * Follow [Todd Motto styleguide](http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/)
> * [Highly configurable](#configuration)

## Getting Started

```bash
$ npm install -g generator-engular
$ yo engular
```

## Modular code organization
TBD

## Subgenerators

```bash
$ yo engular:module    [module_name]
$ yo engular:partial   [module_name]
$ yo engular:filter    [module_name]
$ yo engular:directive [module_name]
$ yo engular:service   [module_name]
```

## Gulp tasks

`gulp wiredep` - inject bower dependencies to index.html

`gulp styles` - build styles

`gulp watch` - watch for html, css, js changes

`gulp docs` - build and serve ngdocs

`gulp serve` - serve app

`gulp lint` - JSHint your js

`gulp` - run `wiredep` `styles` `server` `docs` `watch`


## ngdocs
TBD

https://github.com/m7r/grunt-ngdocs
https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation

## Tests
###Unit
```bash
$ [sudo] npm install karma-cli -g
$ karma start karma.config.js
```

###e2e
```bash
$ node_modules/protractor/bin/webdriver-manager update
$ node_modules/protractor/bin/webdriver-manager start
$ node_modules/protractor/bin/protractor protractor_conf.js
```

## Configuration
TBD

## License

MIT
