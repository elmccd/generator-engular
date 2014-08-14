/* global $:true */
var $ = require('gulp-load-plugins')();
var liveReloadServer = require('tiny-lr')();

var CSS_APP = [
  'app/common/**/*.less',
  'app/modules/**/*.less',
  'app/styles/**/*.less',
  '!app/styles/themes/**/*.less'
];

var CSS_BOOTSTRAP = [
  'app/styles/themes/**/*.less'
];

var HTML = [
  'app/**/*.html',
  '!app/bower_components/**/*.html'
];

var JS = [
  'app/common/**/*.js',
  'app/modules/**/*.js',
  '!app/**/*-spec.js'
];

var Watch = function (gulp) {

  gulp.task('js', function () {
    $.watch({ glob: JS }, function () {
      gulp.task('ngdocs');
      return gulp.src(JS)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-summary'))
        .pipe($.livereload(liveReloadServer));
    });
  });

  gulp.task('html', function () {
    $.watch({ glob: HTML }, function () {
      return gulp.src('app/index.html')
        .pipe($.livereload(liveReloadServer));
    });
  });

  gulp.task('css_app', function () {
    $.watch({ glob: CSS_APP }, function () {
      return gulp.src('app/app.less')
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('./app'))
        .pipe($.livereload(liveReloadServer));
    });
  });

  gulp.task('css_bootstrap', function () {
    $.watch({ glob: CSS_BOOTSTRAP }, function () {
      return gulp.src('app/bootstrap.less')
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('./app'))
        .pipe($.livereload(liveReloadServer));
    });
  });
};

module.exports = Watch;
