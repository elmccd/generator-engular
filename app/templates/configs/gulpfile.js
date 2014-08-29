var gulp = require('gulp');
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')();

var config = require('./gulp/config.js');
var utils = require('./gulp/utils.js')(gulp, $, config);

require('./gulp/server.js')(gulp, $, config);

require('./gulp/docs.js')(gulp, $, config);

require('./gulp/styles.js')(gulp, $, config, utils);

require('./gulp/bower.js')(gulp, $, config);

require('./gulp/lint.js')(gulp, $, config);

require('./gulp/sprite.js')(gulp, $, config, utils);

require('./gulp/dist.js')(gulp, $, config, utils);

require('./gulp/watch.js')(gulp, $, config, utils);




gulp.task('default', function () {
  return runSequence([
    'wiredep', 'styles', 'sprite'
  ], [
    'dist_partials', 'dist_css', 'dist_js', 'dist_assets'
  ], [
    'minify_app', 'minify_vendors'
  ], [
    'server', 'docs', 'watch'
  ]);
});

gulp.task('watch', [
  'watch_css_app',
  'watch_css_bootstrap',
  'watch_html',
  'watch_js',
  'watch_sprite'
], function () {
  //gulp.watch('bower.json', ['wiredep']);
});

gulp.task('build', function () {
  return runSequence([
    'wiredep', 'styles', 'sprite'
  ], [
    'dist_partials', 'dist_css', 'dist_js', 'dist_assets'
  ], [
    'minify_app', 'minify_vendors'
  ]);
});

gulp.task('docs', function () {
  return runSequence([
      'dist_partials', 'dist_css', 'dist_js', 'dist_assets'
    ], [
      'minify_app', 'minify_vendors'
    ],
    'uncache',
    'ngdocs',
    'docs_server');
});

gulp.task('serve', ['server']);
