var Lint = function (gulp, $) {

  gulp.task('lint', function () {
    return gulp.src([
      './tasks/**/*.js',
      './app/common/**/*.js',
      './app/modules/**/*.js'
    ]).pipe($.jshint())
      .pipe($.jshint.reporter('jshint-summary'));
  });

};

module.exports = Lint;
