/* global $:true */
var opn = require('opn');
var $ = require('gulp-load-plugins')();

var Docs = function (gulp) {

  gulp.task('dist', function () {
    var assets = $.useref.assets();
    return gulp.src('app/index.html')
      .pipe(assets)
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe(gulp.dest('dist'));
  });

  gulp.task('ngdocs', function () {
    return gulp.src(['app/index.html'], {read: false})
      .pipe($.shell([
        'grunt ngdocs'
      ]));
  });

  gulp.task('docs_build', function () {
    return gulp.run('dist', 'ngdocs');
  });

  gulp.task('docs_clear', function () {
    return gulp.src('docs').pipe($.rimraf());
  });

  gulp.task('docs_server', function () {
    $.connect.server({
      root: 'docs',
      port: 5001
    });
    return opn('http://localhost:5001');
  });
};

module.exports = Docs;
