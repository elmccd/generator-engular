var runSequence = require('run-sequence');
var Watch = function (gulp, $, config, utils) {

  gulp.task('watch_js', function () {
    $.watch({
      glob: config.files.JS,
      emitOnGlob: false
    }, function (files) {
      if (config.watch.updateDocs) {
        //return runSequence('dist', 'ngdocs');
      }
      return files
        .pipe(config.watch.jshint ? $.jshint() : $.util.noop())
        .pipe(config.watch.jshint ? $.jshint.reporter('jshint-summary') : $.util.noop())
        .pipe(config.server.liveReload ? $.livereload(config.server.liveReloadPort) : $.util.noop());
    });
  });

  gulp.task('watch_html', function () {
    $.watch({
      glob: config.files.HTML,
      emitOnGlob: false
    }, function () {
      return gulp.src('app/index.html')
        .pipe(config.server.liveReload ? $.livereload(config.server.liveReloadPort) : $.util.noop());
    });
  });

  gulp.task('watch_css_app', function () {
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

  gulp.task('watch_sprite', function () {
    $.watch({
      glob: config.files.SPRITES,
      emitOnGlob: false
    }, function () {
      return runSequence('sprite');
    });
  });

};

module.exports = Watch;
