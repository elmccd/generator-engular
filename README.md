# generator-engular [![Build Status](https://secure.travis-ci.org/elmccd/generator-engular.png?branch=master)](https://travis-ci.org/elmccd/generator-engular)

> [Yeoman](http://yeoman.io) generator


## Getting Started

```bash
$ npm install -g generator-engular
```

Finally, initiate the generator:

```bash
$ yo engular
```

## Generators

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

`gulp` - run `wiredep` `styles` `server` `docs`, `watch`

## Running tests
###Unit
`[sudo] npm install karma-cli -g`
`karma start karma.config.js`
or
`node_modules/karma/bin/karma start karma.config.js`

###e2e
`node_modules/protractor/bin/webdriver-manager update`
`node_modules/protractor/bin/webdriver-manager start`

`[sudo] npm install protractor -g`
`protractor protractor_conf.js`
or
`node_modules/protractor/bin/protractor protractor_conf.js`

## License

MIT
