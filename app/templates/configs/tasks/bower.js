var wiredep = require('wiredep').stream;

var Bower = function (gulp) {

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
};

module.exports = Bower;
