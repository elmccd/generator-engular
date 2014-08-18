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
    console.log('You called the directive subgenerator with the argument ' + this.name + '.');
    this.name = _.str.camelize(this.name);
  },

  askFor: function () {
    var done = this.async();
    var modules = this.config.get('modules');
    var choices = _.pluck(modules, 'name');
    var prompts = [
      {
        name: 'module',
        message: 'Which module would you like to place the new directive?',
        type: 'list',
        choices: choices,
        default: 0
      }
    ];

    this.prompt(prompts, function (props) {
      this.module = _.str.camelize(props.module);

      this.moduleDir = _.findWhere(modules, {
        name: props.module
      }).dir;

      this.modulePath = _.findWhere(modules, {
        name: props.module
      }).path;

      this.templateUrl = path.join(this.moduleDir, 'directives', this.name, this.name + '.directive.html');
      done();
    }.bind(this));
  },

  files: function () {
    console.log(this.module, this.name);
    this.copy('directive.js.tpl', path.join('app', this.moduleDir, 'directives', this.name, this.name + '.directive.js'));
    this.copy('directive-spec.js', path.join('app', this.moduleDir, 'directives', this.name, this.name + '.directive.unit.js'));
    this.copy('directive.html', path.join('app', this.moduleDir, 'directives', this.name, this.name + '.directive.html'));
    this.copy('directive.less', path.join('app', this.moduleDir, 'directives', this.name, this.name + '.directive.less'));

    //update angular_modules.less
    utils.appendImport(path.join(this.moduleDir, 'directives', this.name, this.name + '.directive.less'), 'app/styles/modules.less', false);

    //update index.html
    utils.insertScript(path.join(this.moduleDir, 'directives', this.name, this.name + '.directive.js'), '<!-- Add New Component JS Above -->');
  }
});

module.exports = PartialGenerator;
