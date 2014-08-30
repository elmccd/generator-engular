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

var tasks = {
  prebuild: [
    'wiredep',
    'styles',
    'sprite',
    'svg'
  ],
  dist: [
    'dist_partials',
    'dist_css',
    'dist_js',
    'dist_assets'
  ],
  minify: [
    'minify_app',
    'minify_vendors'
  ],
  postminify: [
    'uncache'
  ],
  info: [
    'info'
  ]
};

gulp.task('default', function () {
  return runSequence(tasks.prebuild, tasks.dist, tasks.minify, tasks.postminify, [
    'server', 'ngdocs', 'docs_server', 'watch'
  ]);
});

gulp.task('watch', [
  'watch_css_app',
  'watch_html',
  'watch_js',
  'watch_sprite',
  'watch_svg'
]);


gulp.task('build', function () {
  return runSequence(tasks.prebuild, tasks.dist, tasks.minify, tasks.postminify, tasks.info);
});

gulp.task('docs', function () {
  return runSequence(tasks.dist, tasks.minify, 'ngdocs', 'docs_server');
});

gulp.task('serve', ['server']);
