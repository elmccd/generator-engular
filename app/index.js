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
        default: _.str.camelize(path.basename(process.cwd()))
      },
      {
        name: 'cssPreprocessor',
        type: 'list',
        message: 'Which CSS preprocessor would you like to use?',
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
        name: 'htmlMarkup',
        type: 'list',
        message: 'Choose your markup language',
        choices: [
          {
            name: 'HTML',
            value: 'html'
          },
          {
            name: 'HAML',
            value: 'haml'
          },
          {
            name: 'Jade',
            value: 'jade'
          }
        ]
      },
      {
        name: 'libraries',
        type: 'checkbox',
        message: 'Which libs you want to use?',
        choices: [
          {
            name: 'jQuery',
            value: 'jQuery'
          },
          {
            name: 'lodash',
            value: 'lodash'
          },          {
            name: 'bootstrap',
            value: 'bootstrap'
          },
          {
            name: 'angular-animate',
            value: 'angular-animate'
          },
          {
            name: 'angular-resource',
            value: 'angular-resource'
          },
          {
            name: 'angular-cookies',
            value: 'angular-cookies'
          },
          {
            name: 'restangular',
            value: 'restangular'
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
      var cssPreprocessors = {
        sass: 'scss',
        less: 'less',
        stylus: 'styl'
      };

      this.appName = _.str.camelize(props.appName);
      this.cssPreprocessor = props.cssPreprocessor;
      this.htmlMarkup = props.htmlMarkup;
      this.includeExamples = props.includeExamples;
      this.libraries = props.libraries;


      this.libraries = _.object(this.libraries, this.libraries.map(function (el) {
        return !!el;
      }));
      this.config.set('modules', [
        {
          'name': this.appName,
          'dir': 'common/',
          'path': 'app.js'
        }
      ]);
      this.config.set('appName', this.appName);
      this.config.set('cssPreprocessor', this.cssPreprocessor);
      this.config.set('htmlMarkup', this.htmlMarkup);
      this.config.set('cssPreprocessorExt', cssPreprocessors[this.cssPreprocessor]);
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
    this.mkdir('app/assets/sprites');
    this.mkdir('app/common');
    this.mkdir('app/modules');
    this.mkdir('app/styles/base');
    this.mkdir('app/styles/components');
    this.mkdir('app/styles/state');
    this.mkdir('app/styles/themes');
    this.mkdir('app/styles/tools');

    if (this.includeExamples) {
      this.directory('examples/common', 'app/common');
      this.directory('examples/styles/' + this.cssPreprocessor + '/common', 'app/common');
      this.directory('examples/assets', 'app/assets');
    }
  },

  projectfiles: function () {

  }
});

module.exports = EngularGenerator;
