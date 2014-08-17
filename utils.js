'use strict';
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

var utils = {};

/**
 * insertScript - insert script tag above delimiter
 *
 * @param fromPath String
 * @param delimiter String
 */
utils.insertScript = function (fromPath, delimiter) {
  var filePath = path.normalize(fromPath);
  var newContent = '<script src="/' + filePath + '"></script>';

  fs.readFile('app/index.html', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var result = data.replace(delimiter, newContent + '\n' + delimiter);

    fs.writeFile('app/index.html', result, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }

    });
  });
  console.log(chalk.green(' updating') + ' %s', 'app/index.html');
};

/**
 * appendImport - append import line to less files
 *
 * @param fromPath String Path of new created styles
 * @param toPath  String Path of file with imports
 * @param withoutNewline Boolean
 */
utils.appendImport = function (fromPath, toPath, withoutNewline) {
  var filePath = path.normalize(path.relative('styles', fromPath));
  var newContent = '@import "' + filePath + '";' + (withoutNewline ? '' : '\n');
  toPath = path.normalize(toPath);

  fs.appendFile(toPath, newContent, function (err) {
    if (err) {
      throw (err);
    }
    console.log(chalk.green(' updating') + ' %s', toPath);
  });

};


/**
 * insert Route
 *
 * @param newContent String
 * @param toPath String Module path
 */
utils.insertRoute = function (newContent, toPath) {
  var delimiter = '/* Add New States Above */';
  toPath = path.join('app', toPath);

  fs.readFile(toPath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var result = data.replace(delimiter, newContent + '\n' + delimiter);

    fs.writeFile(toPath, result, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }

    });
  });
  console.log(chalk.green(' updating') + ' %s', toPath);
};
module.exports = utils;
