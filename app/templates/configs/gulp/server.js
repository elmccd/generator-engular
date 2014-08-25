var opn = require('opn');
var liveReload = require('connect-livereload');
var express = require('express');

var Server = function (gulp, $, config) {

  gulp.task('server', function () {
    var server = express();

    if (config.server.liveReload) {
      server.use(liveReload({
        port: config.server.liveReloadPort,
        src: 'http://localhost:' + config.server.liveReloadPort + '/livereload.js?snipver=1'
      }));
      $.livereload.listen(config.server.liveReloadPort);
    }

    server.use(express.static(config.server.directory));

    server.all('/*', function (req, res) {
      res.sendFile('index.html', { root: config.server.directory });
    });

    server.listen(config.server.port);

    if (config.server.openBrowser) {
      opn('http://localhost:' + config.server.port);
    }

  });

};

module.exports = Server;
