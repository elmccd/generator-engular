var opn = require('opn');
var liveReload = require('connect-livereload');
var express = require('express');

var Server = function (gulp, $, config) {

  gulp.task('server', function () {
    var server = express();

    if (config.server.liveReload) {
      server.use(liveReload({
        port: 35731,
        src: "http://localhost:35731/livereload.js?snipver=1"
      }));
      $.livereload.listen(config.server.liveReloadPort);
    }

    server.use(express.static('./app'));

    server.all('/*', function (req, res) {
      res.sendFile('index.html', { root: 'app' });
    });

    server.listen(config.server.port);

    if(config.server.openBrowser) {
      opn('http://localhost:' + config.server.port);
    }

  });

};

module.exports = Server;
