var gulp = require('gulp');
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')();

var config = require('./gulp/config.js');

var utils = require('./gulp/utils.js')(gulp, $, config);

require('./gulp/server.js')(gulp, $, config);

require('./gulp/docs.js')(gulp, $, config);

require('./gulp/styles.js')(gulp, $, config, utils);

require('./gulp/watch.js')(gulp, $, config, utils);

require('./gulp/bower.js')(gulp, $, config);

require('./gulp/lint.js')(gulp, $, config);


gulp.task('default', function () {
  return runSequence(['wiredep', 'styles'], ['server', 'docs', 'watch']);
});

gulp.task('watch', ['css_app', 'css_bootstrap', 'html', 'js'], function () {
  //gulp.watch('bower.json', ['wiredep']);
});

gulp.task('docs', function () {
  return runSequence('dist', 'ngdocs', 'docs_server');
});

gulp.task('serve', ['server']);
