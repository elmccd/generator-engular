'use strict';
var fs = require('fs');
var util = require('util');
var utils = require('../../utils.js');
var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('underscore');
_.str = require('underscore.string');


var PartialGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the partial subgenerator with the argument ' + this.name + '.');
    this.name = _.str.underscored(this.name);
    this.ctrlname = _.str.classify(this.name);
    this.appname = this.config.get('appName');
  },

  askFor: function () {
    var done = this.async();

    var modules = this.config.get('modules');

    var choices = _.pluck(modules, 'name');

    var prompts = [
      {
        name: 'statename',
        message: 'Enter your route state name.'
      }, {
        name: 'route',
        message: 'Enter your route url (i.e. /mypartial/:id).  If you don\'t want a route added for you, leave this empty.'
      },
      {
        name: 'module',
        message: 'Which module would you like to place the new partial?',
        type: 'list',
        choices: choices,
        default: 0
      }
    ];

    this.prompt(prompts, function (props) {
      this.route = props.route;
      this.statename = props.statename;
      this.module = _.str.camelize(props.module);
      this.moduleDir = _.findWhere(modules, {
        name: props.module
      }).dir;
      this.modulePath = _.findWhere(modules, {
        name: props.module
      }).path;
      done();
    }.bind(this));
  },

  files: function () {
    this.copy('partial.js.tpl', path.join('app', this.moduleDir, 'partials', this.name, this.name + '.partial.js'));
    this.copy('partial-spec.js', path.join('app', this.moduleDir, 'partials', this.name, this.name + '.partial.unit.js'));
    this.copy('partial.html', path.join('app', this.moduleDir, 'partials', this.name, this.name + '.partial.html'));
    this.copy('partial.less', path.join('app', this.moduleDir, 'partials', this.name, this.name + '.partial.' + this.config.get('cssPreprocessorExt')));

    //update angular_modules.less
    utils.appendImport(path.join(this.moduleDir, 'partials', this.name, this.name + '.partial.' + this.config.get('cssPreprocessorExt')), 'app/styles/modules.' + this.config.get('cssPreprocessorExt'), false);

    //update index.html
    utils.insertScript(path.join(this.moduleDir, 'partials', this.name, this.name + '.partial.js'), '<!-- Add New Component JS Above -->');

    //update module
    this.templateUrl = path.join(this.moduleDir, 'partials', this.name, this.name + '.partial.html');

    var controllerTemplate = this.src.read('routeTemplate.js');
    var compiled = _.template(controllerTemplate);

    utils.insertRoute(compiled(this), this.modulePath);
  }
});

module.exports = PartialGenerator;
