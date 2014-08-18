var opn = require('opn');

var Docs = function (gulp, $, config) {

  gulp.task('dist', function () {
    var assets = $.useref.assets();
    return gulp.src('app/index.html')
      .pipe(assets)
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe(gulp.dest('dist'));
  });

  gulp.task('ngdocs', ['docs_clear'], function () {
    return gulp.src(['app/index.html'], {read: false})
      .pipe($.shell([
        'grunt ngdocs'
      ]));
  });

  gulp.task('docs_clear', function () {
    return gulp.src('docs').pipe($.rimraf());
  });

  gulp.task('docs_server', function () {
    $.connect.server({
      root: ['docs', 'app'],
      port: config.docs.port
    });

    if (config.docs.openBrowser) {
      opn('http://localhost:' + config.docs.port);
    }
  });
};

module.exports = Docs;
