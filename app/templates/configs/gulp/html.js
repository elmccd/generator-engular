var runSequence = require('run-sequence');

var Html = function (gulp, $, config) {

  gulp.task('html', function () {
    return gulp.src(config.files.HTML)
      .pipe($.if(config.options.htmlMarkup === 'jade', $.jade()))
      .pipe($.if(config.options.htmlMarkup === 'haml', $.haml()))
      .pipe(gulp.dest('./'));
  });


};

module.exports = Html;
