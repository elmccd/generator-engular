var opn = require('opn');
var express = require('express');
var liveReload = require('connect-livereload');
var exec = require('child_process').exec;

var Docs = function (gulp, $, config) {

  gulp.task('dist', function () {
    var assets = $.useref.assets();
    return gulp.src('app/index.html')
      .pipe(assets)
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe(gulp.dest('dist'));
  });

  gulp.task('ngdocs', ['ngdocs_clear'], function () {
    exec('grunt ngdocs', function (err, stdout, stderr) {
      return gulp.src('docs/ngdocs/index.html')
        .pipe(config.docs.liveReload ? $.livereload(config.docs.liveReloadPort) : $.util.noop());
    });
  });

  gulp.task('ngdocs_rebuild', ['dist', 'ngdocs'], function () {
    exec('grunt ngdocs', function (err, stdout, stderr) {
      return gulp.src('docs/ngdocs/index.html')
        .pipe(config.docs.liveReload ? $.livereload(config.docs.liveReloadPort) : $.util.noop());
    });
  });

    gulp.task('ngdocs_clear', function () {
    return gulp.src('docs/ngdocs').pipe($.rimraf());
  });

  gulp.task('ngdocs_server', function () {
    var server = express();

    if (config.docs.liveReload) {
      server.use(liveReload({
        port: config.docs.liveReloadPort,
        src: 'http://localhost:' + config.docs.liveReloadPort +'/livereload.js?snipver=1'
      }));
      $.livereload.listen(config.docs.liveReloadPort);
    }

    server.use(express.static('./docs/ngdocs'));

    server.all('/*', function (req, res) {
      res.sendFile('index.html', { root: './docs/ngdocs' });
    });


    server.listen(config.docs.port);

    if(config.docs.openBrowser) {
       opn('http://localhost:' + config.docs.port);
    }
  });
};

module.exports = Docs;
