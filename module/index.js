'use strict';
var util = require('util');
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var _ = require('underscore');
var yeoman = require('yeoman-generator');
var ngParseModule = require('ng-parse-module');
var utils = require('../utils.js');
_.str = require('underscore.string');

var ModuleGenerator = yeoman.generators.NamedBase.extend({

  init: function (promptedModuleName) {
    //yeoman.generators.NamedBase.apply(this, arguments);
    this.promptedModuleName = promptedModuleName;
    this.pkg = require('../package.json');
    this.on('end', function () {
      var modules = this.config.get('modules');
      if (!modules) {
        modules = [];
      }
      modules.push({
        name: _.str.camelize(this.name),
        dir: path.join(this.dir),
        path: path.join(this.dir, this.name + '.js')
      });

      this.config.set('modules', modules);
      this.config.save();

      //update app.js
      var results = ngParseModule.parse('app/app.js');
      results.dependencies.modules.push(_.str.camelize(this.name));
      results.save();
      console.log(chalk.green(' updating') + ' %s', 'app/app.js');

      //update angular_modules.less
      utils.appendImport(this.dir + this.name + '.less', 'app/styles/modules_angular.less', false);

      //update index.html
      utils.insertScript(this.dir + this.name + '.js', '<!-- Add New Component JS Above -->');
    });
  },
  askFor: function () {
    var done = this.async();

    var defaultDir = path.join('modules', this.name, '/');

    var prompts = [
      {
        name: 'dir',
        message: 'Where would you like to create the module (must specify a subdirectory)?',
        default: defaultDir,
        validate: function (value) {
          value = _.str.trim(value);
          if (_.isEmpty(value) || value[0] === '/' || value[0] === '\\') {
            return 'Please enter a subdirectory.';
          }
          return true;
        }
      }
    ];

    this.prompt(prompts, function (props) {
      this.dir = props.dir;

      done();
    }.bind(this));
  },
  files: function () {
    this.copy('module.js', path.join('app', this.dir + this.name + '.js'));
    this.copy('module.less', path.join('app', this.dir + this.name + '.less'));
  }
});


module.exports = ModuleGenerator;
