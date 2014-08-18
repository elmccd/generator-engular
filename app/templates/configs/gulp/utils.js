var Notification = require('node-notifier');
var notifier = new Notification();
var _string = require('underscore.string');
var path = require('path');

var Utils = function (gulp, $) {
  var utils = {};

  utils.prepareNotificationMessage = function (message) {
    return _string.capitalize(message.replace(path.join(process.cwd(), 'app') + path.sep, ':\n'));
  };

  utils.handleError = function (err) {
    $.util.log($.util.colors.red(err.toString()));
    notifier.notify({
      'title': 'Error in ' + err.plugin,
      'message': utils.prepareNotificationMessage(err.message)
    });
    this.emit('end');
  };

  return utils;
};

module.exports = Utils;
