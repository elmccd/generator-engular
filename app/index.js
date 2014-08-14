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
    this.pkg = require('../package.json');
    this.on('end', function () {
      this.config.set('modules', [
        {
          'name': this.appName,
          'dir': 'common/',
          'path': 'app.js'
        }
      ]);
      this.config.set('appName', this.appName);
      this.config.save();

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
        name: 'cssPre',
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
            value: 'styl'
          }
        ]
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = _.str.camelize(props.appName);
      this.cssPre = props.cssPre;

      done();
    }.bind(this));
  },

  app: function () {

    this.directory('app', 'app');
    this.directory(this.cssPre, 'app');
    this.directory('configs', '.');
    this.directory('configs/tasks', './tasks');

    this.mkdir('app/assets/font');
    this.mkdir('app/assets/img');
    this.mkdir('app/common');
    this.mkdir('app/modules');
    this.mkdir('app/styles/base');
    this.mkdir('app/styles/modules');
    this.mkdir('app/styles/state');
    this.mkdir('app/styles/themes');
    this.mkdir('app/styles/tools');

  },

  projectfiles: function () {

  }
});

module.exports = EngularGenerator;
