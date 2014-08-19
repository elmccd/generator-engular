/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var fs = require('fs');
var assert = require('assert');
var helpers = require('yeoman-generator').test;
var exec = require('child_process').exec;

var dirName = 'temp';
var generatorName = 'generator-engular';
var appName = 'my-app';

var expected = [
  '.jshintrc',
  '.editorconfig',
  '.yo-rc.json',
  'package.json',
  'bower.json',
];

describe('engular generator', function () {
  this.timeout(240e3);

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, dirName), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('engular:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files with sass', function (done) {
    var sassFiles = ['app/app.scss', 'app/bootstrap.scss'];
    helpers.mockPrompt(this.app, {
      'appName': appName,
      'cssPreprocessor': 'sass'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected.concat(sassFiles));
      done();
    });
  });

  it('creates expected files with less', function (done) {
    var lessFiles = ['app/app.less', 'app/bootstrap.less'];

    helpers.mockPrompt(this.app, {
      'appName': appName,
      'cssPreprocessor': 'less'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected.concat(lessFiles));
      done();
    });
  });

  it('creates expected files with stylus', function (done) {
    var stylusFiles = ['app/app.styl', 'app/bootstrap.styl'];

    helpers.mockPrompt(this.app, {
      'appName': appName,
      'cssPreprocessor': 'stylus'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected.concat(stylusFiles));
      done();
    });
  });

  it('set options in .yo-rc.json', function (done) {
    helpers.mockPrompt(this.app, {
      'appName': appName,
      'cssPreprocessor': 'less'
    });

    this.app.options['skip-install'] = false;

    this.app.run({}, function () {
      var yorc;
      assert.doesNotThrow(function () {
        yorc = JSON.parse(fs.readFileSync('.yo-rc.json').toString())
      });
      assert.equal(yorc[generatorName].appName, 'myApp');
      assert.equal(yorc[generatorName].modules.length, 1);
      done();
    });
  });

});
