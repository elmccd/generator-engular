'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var utils = require('../utils.js');
var _ = require('underscore');
_.str = require('underscore.string');

var EngularGenerator = yeoman.generators.Base.extend({
  init: function () {

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();


    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Engular generator!'));

    var prompts = [
      {
        name: 'appName',
        message: 'What would you like the angular app name to be?',
        default: path.basename(process.cwd())
      },
      {
        name: 'cssPreprocessor',
        type: 'list',
        message: 'Which CSS preprocessor would you like to use? (with equivalent bootstrap version)',
        choices: [
          {
            name: 'SASS',
            value: 'sass'
          },
          {
            name: 'Less',
            value: 'less'
          },
          {
            name: 'Stylus',
            value: 'stylus'
          }
        ]
      },
      {
        name: 'includeExamples',
        type: 'confirm',
        message: 'Do yo want to include examples? (recommended for first usage)',
        default: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = _.str.camelize(props.appName);
      this.cssPreprocessor = props.cssPreprocessor;
      this.includeExamples = props.includeExamples;

      this.config.set('modules', [
        {
          'name': this.appName,
          'dir': 'common/',
          'path': 'app.js'
        }
      ]);
      this.config.set('appName', this.appName);
      this.config.save();

      done();
    }.bind(this));
  },

  app: function () {

    this.directory('app', 'app');
    this.directory(this.cssPreprocessor, 'app');
    this.directory('configs', '.');
    this.directory('configs/gulp', './gulp');

    this.mkdir('app/assets/font');
    this.mkdir('app/assets/img');
    this.mkdir('app/common');
    this.mkdir('app/modules');
    this.mkdir('app/styles/base');
    this.mkdir('app/styles/components');
    this.mkdir('app/styles/state');
    this.mkdir('app/styles/themes');
    this.mkdir('app/styles/tools');

    if (this.includeExamples) {
      this.directory('examples', 'app');
    }
  },

  projectfiles: function () {

  }
});

module.exports = EngularGenerator;
