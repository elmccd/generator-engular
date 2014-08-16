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

`yo engular:module    [module_name]`

`yo engular:partial   [module_name]`

`yo engular:filter    [module_name]`

`yo engular:directive [module_name]`

`yo engular:service   [module_name]`

## Gulp tasks

`gulp wiredep` - inject bower dependencies to index.html

`gulp watch` - build styles and watch for html, css, js changes

`gulp docs` - build and serve ngdocs

`gulp server` - serve app

`gulp` - run `wiredep` `server` `docs`, `watch`

## License

MIT
