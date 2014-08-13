var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var opn = require('opn');
var $ = require('gulp-load-plugins')();

gulp.task('wiredep', function () {
  return gulp.src('app/index.html')
    .pipe(wiredep({
      'exclude': [/bootstrap\.css/],
      fileTypes: {
        html: {
          replace: {
            js: '<script src="/{{filePath}}"></script>'
          }
        }
      }
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('styles-app', function () {
  return gulp.src('app/app.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('app'));
});

gulp.task('styles-bootstrap', function () {
  return gulp.src('app/bootstrap.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('app'));
});

gulp.task('styles', ['styles-app', 'styles-bootstrap']);

gulp.task('watch', function () {
  $.livereload.listen();

  // watch for changes
  gulp.watch([
    'app/**/*.html',
    'app/**/*.js',
    'app/app.css'
  ]).on('change', $.livereload.changed);

  gulp.watch('app/**/*.less', ['styles-app']);
  gulp.watch('app/styles/themes/**/*.less', ['styles-bootstrap']);
  gulp.watch('bower.json', ['wiredep']);
  gulp.watch('app/**/*.js', ['dist', 'ngdocs']);
});

gulp.task('dist', function () {
  var assets = $.useref.assets();
  return gulp.src('app/index.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('ngdocs', $.shell.task([
  'grunt ngdocs'
]));

gulp.task('docs_server', function () {
  $.connect.server({
    root: 'docs',
    livereload: false
  });
  return opn('http://localhost:8080');
});

gulp.task('default', function () {
  runSequence('wiredep', 'styles', 'dist', 'ngdocs', 'docs_server', 'watch');
});
