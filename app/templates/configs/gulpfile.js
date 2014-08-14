var gulp = require('gulp');
var runSequence = require('run-sequence');

require('./tasks/server.js')(gulp);

require('./tasks/docs.js')(gulp);

require('./tasks/watch.js')(gulp);

require('./tasks/bower.js')(gulp);

require('./tasks/lint.js')(gulp);


gulp.task('default', ['server', 'watch', 'docs']);

gulp.task('watch', ['css_app', 'css_bootstrap', 'html', 'js'], function () {
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('docs', function () {
  return runSequence('docs_build', 'docs_server');
});

