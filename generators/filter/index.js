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
    console.log('You called the filter subgenerator with the argument ' + this.name + '.');
    this.name = _.str.camelize(this.name);
  },

  askFor: function () {
    var done = this.async();
    var modules = this.config.get('modules');
    var choices = _.pluck(modules, 'name');
    var prompts = [
      {
        name: 'module',
        message: 'Which module would you like to place the new filter?',
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

      done();
    }.bind(this));
  },

  files: function () {
    console.log(this.module, this.name);
    this.copy('filter.js.tpl', path.join('app', this.moduleDir, 'filters', this.name, this.name + '.filter.js'));
    this.copy('filter-spec.js', path.join('app', this.moduleDir, 'filters', this.name, this.name + '.filter.spec.js'));

    //update index.html
    utils.insertScript(path.join(this.moduleDir, 'filters', this.name, this.name + '.filter.js'), '<!-- Add New Component JS Above -->');
  }
});

module.exports = PartialGenerator;
