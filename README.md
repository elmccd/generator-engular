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

`gulp styles-app` - generate app.css

`gulp styles-bootstrap` - generate bootstrap.css (from bootstrap files and styles/themes)

`gulp styles` - generate all styles

`gulp watch` - open live reload server and watch for changes in html/js/css files

## License

MIT
