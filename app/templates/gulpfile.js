var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')();

gulp.task('wiredep', function () {
  return gulp.src('app/index.html')
    .pipe(wiredep({
      'exclude': [/bootstrap\.css/]
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('connect', function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic('app'))
    .use(serveStatic('.tmp'))
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    .use('/bower_components', serveStatic('bower_components'))
    .use(serveIndex('app'));
//    .use(function (req, res) {
//      //require('fs').createReadStream('app/index.html').pipe(res);
//    });

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

gulp.task('serve', ['connect'], function () {
  return require('opn')('http://localhost:9000');
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

gulp.task('watch', ['serve'], function () {
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
});

gulp.task('default', function () {
  runSequence('wiredep', 'styles', 'watch');
});
