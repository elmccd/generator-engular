# generator-engular [![Build Status](https://secure.travis-ci.org/elmccd/generator-engular.png?branch=master)](https://travis-ci.org/elmccd/generator-engular)

> Yeoman generator for Angular projects with:
> * [Modular code organization](#modular-code-organization)
> * [Subgenerators](#subgenerators)
> * [Gulp build system](#gulp-tasks)
> * support for SASS/LESS/Stylus
> * [live ngdocs documentation](#ngdocs)
> * [Unit and e2e tests](#tests)
> * Follow [Todd Motto styleguide](http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/)
> * [Highly configurable](#configuration)

## Getting Started

```bash
$ npm install -g generator-engular
$ yo engular
$ gulp
```

## Modular code organization
```
app
├── assets
├── common - (assigned to module0)
│   ├── directives
│   │   └── [directive_name]
│   │       ├── [directive_name].directive.e2e.js
│   │       ├── [directive_name].directive.html
│   │       ├── [directive_name].directive.js
│   │       ├── [directive_name].directive.styl
│   │       └── [directive_name].directive.unit.js
│   ├── filters
│   │   └── [filter_name]
│   │       ├── [filter_name].filter.e2e.js
│   │       ├── [filter_name].filter.js
│   │       └── [filter_name].filter.unit.js
│   ├── partials
│   │   └── [partial_name]
│   │       ├── [partial_name].partial.html
│   │       ├── [partial_name].partial.js
│   │       ├── [partial_name].partial.styl
│   │       └── [partial_name].partial.unit.js
│   └── services
│       └── [service_name]
│           ├── [service_name].service.js
│           └── [service_name].service.unit.js
├── modules
│   ├── [module1_name]
│   │   ├── directives
│   │   ├── filters
│   │   ├── partials
│   │   ├── services
│   │   ├── login.js
│   │   └── login.less
│   └── [module2_name]
├── styles
├── app.css
├── app.js (module0)
└── index.html

```

## Subgenerators

```bash
$ yo engular:module    [module_name]
$ yo engular:partial   [module_name]
$ yo engular:filter    [module_name]
$ yo engular:directive [module_name]
$ yo engular:service   [module_name]
```

## Gulp tasks

`gulp build` - run wiredep, styles, sprites, and create dist

`gulp serve` - serve app

`gulp serve --dist` - serve dist

`gulp docs` - build and serve docs

`gulp watch` - Watch all files, run styles, livereload, update ngdocs

`gulp` - run `server` `docs` `watch`


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
$ [sudo] npm install protractor -g
$ protractor protractor_conf.js
```

## Configuration
TBD

## License

MIT
