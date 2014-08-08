'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var EngularGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

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

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {

      this.directory('', '');// script is folder name

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
