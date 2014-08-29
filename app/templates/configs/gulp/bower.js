var wiredep = require('wiredep').stream;

var Bower = function (gulp) {

  gulp.task('wiredep', function () {
    return gulp.src('app/index.html')
      .pipe(wiredep())
      .pipe(gulp.dest('./app'));
  });
};

module.exports = Bower;
