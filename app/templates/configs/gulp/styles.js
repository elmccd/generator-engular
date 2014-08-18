var Styles = function (gulp, $, config, utils) {

  gulp.task('styles', function () {
    return gulp.src([
        'app/app.' + config.options.cssPreprocessorExt,
        'app/bootstrap.' + config.options.cssPreprocessorExt
      ])
      .pipe(config.watch.cssSourceMap ? $.sourcemaps.init() : $.util.noop())
      .pipe($[config.options.cssPreprocessor]().on('error', utils.handleError))
      .pipe(config.watch.cssSourceMap ? $.sourcemaps.write('./') : $.util.noop())
      .pipe(gulp.dest('./app'));
  });
};

module.exports = Styles;
