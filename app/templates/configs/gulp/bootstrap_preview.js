var opn = require('opn');
var express = require('express');
var liveReload = require('connect-livereload');

var BootstrapPreview = function (gulp, $, config) {

  gulp.task('bootstrap-preview', function () {
    var server = express();

    if (config.bootstrapPreview.liveReload) {
      server.use(liveReload({
        port: config.bootstrapPreview.liveReloadPort,
        src: 'http://localhost:' + config.bootstrapPreview.liveReloadPort +'/livereload.js?snipver=1'
      }));
      $.livereload.listen(config.bootstrapPreview.liveReloadPort);
    }

    server.use(express.static('./docs/bootstrap-preview'));
    server.use(express.static('./app'));

    server.all('/*', function (req, res) {
      res.sendFile('index.html', { root: './docs/bootstrap-preview' });
    });


    server.listen(config.bootstrapPreview.port);

    if(config.bootstrapPreview.openBrowser) {
       opn('http://localhost:' + config.bootstrapPreview.port);
    }
  });
};

module.exports = BootstrapPreview;
