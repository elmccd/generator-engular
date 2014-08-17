var runSequence = require('run-sequence');
var Watch = function (gulp, $, config, utils) {

  gulp.task('js', function () {
    $.watch({
      glob: config.files.JS,
      emitOnGlob: false
    }, function (files) {
      if (config.watch.updateDocs) {
        return runSequence('dist', 'ngdocs');
      }
      return files
        .pipe(config.watch.jshint ? $.jshint() : $.util.noop())
        .pipe(config.watch.jshint ? $.jshint.reporter('jshint-summary') : $.util.noop())
        .pipe(config.server.liveReload ? $.livereload(config.server.liveReloadPort) : $.util.noop());
    });
  });

  gulp.task('html', function () {
    $.watch({
      glob: config.files.HTML,
      emitOnGlob: false
    }, function () {
      return gulp.src('app/index.html')
        .pipe(config.server.liveReload ? $.livereload(config.server.liveReloadPort) : $.util.noop());
    });
  });

  gulp.task('css_app', function () {
    $.watch({
      glob: config.files.CSS_APP,
      emitOnGlob: false
    }, function () {
      return gulp.src('app/app.' + config.options.cssPreprocessorExt)
        .pipe(config.watch.cssSourceMap ? $.sourcemaps.init() : $.util.noop())
        .pipe($[config.options.cssPreprocessor]().on('error', utils.handleError))
        .pipe(config.watch.cssSourceMap ? $.sourcemaps.write('./') : $.util.noop())
        .pipe(gulp.dest('./app'))
        .pipe(config.server.liveReload ? $.livereload(config.server.liveReloadPort) : $.util.noop());
    });
  });

  gulp.task('css_bootstrap', function () {
    $.watch({
      glob: config.files.CSS_BOOTSTRAP,
      emitOnGlob: false
    }, function () {
      return gulp.src('app/bootstrap.' + config.options.cssPreprocessorExt)
        .pipe($.plumber())
        .pipe(config.watch.cssSourceMap ? $.sourcemaps.init() : $.util.noop())
        .pipe($[config.options.cssPreprocessor]().on('error', utils.handleError))
        .pipe(config.watch.cssSourceMap ? $.sourcemaps.write('./') : $.util.noop())
        .pipe(gulp.dest('./app'))
        .pipe(config.server.liveReload ? $.livereload(config.server.liveReloadPort) : $.util.noop());
    });
  });
};

module.exports = Watch;
