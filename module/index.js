'use strict';
var util = require('util');
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var _ = require('underscore');
var yeoman = require('yeoman-generator');
var ngParseModule = require('ng-parse-module');


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
                file: path.join(this.dir)
            });

            this.config.set('modules',modules);
            this.config.save();

            //read module from file
            var results = ngParseModule.parse('app/app.js');
            //update module dependencies and rewrite
            results.dependencies.modules.push(_.str.camelize(this.name));
            results.save();

            //update angular_modules.less
            //@TODO use path.join to normalize paths
            //@TODO add helper function to things like below
            var moduleLessPath = path.relative('app/styles', this.dir + this.name + '.less');
            fs.appendFile('app/styles/modules_angular.less', '@import "' + moduleLessPath + '";\n');
            this.log.writeln(chalk.green(' updating') + ' %s', 'app/styles/modules_angular.less');

            //update index.html
            var moduleJsPath = path.relative('app', this.dir + this.name + '.js');
            var fileTemplate = '<script src="' + moduleJsPath + '"></script>\n<!-- Add New Component JS Above -->';
            fs.readFile('app/index.html', 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                }

                var result = data.replace('<!-- Add New Component JS Above -->', fileTemplate);

                fs.writeFile('app/index.html', result, 'utf8', function (err) {
                    if (err) return console.log(err);

                });
            });
            this.log.writeln(chalk.green(' updating') + ' %s', 'app/index.html');
        });
    },
    askFor: function () {
        var done = this.async();

        var moduleName = this.promptedModuleName;

        var defaultDir = path.join('app','modules', this.name, '/');

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
        this.copy('module.js', this.dir + this.name + '.js');
        this.copy('module.less', this.dir + this.name + '.less');
    }
});


module.exports = ModuleGenerator;