var runSequence = require('run-sequence');

var Dist = function (gulp, $, config) {

  gulp.task('dist_clear', function () {
    return gulp.src('dist', {read: false})
      .pipe($.rimraf());
  });

  gulp.task('dist_partials', function () {
    return gulp.src([
      'app/modules/**/*.html',
      'app/common/**/*.html'
    ], {
      base: 'app'
    })
      .pipe($.if(config.dist.minifyPartials, $.htmlmin(config.dist.options.htmlmin)))
      .pipe(gulp.dest('dist'))
      .pipe($.ngHtml2js({
        moduleName: 'partials',
        prefix: '/'
      }))
      .pipe($.concat('partials.js'))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('dist_css', function () {
    return gulp.src('app/*.css')
      .pipe($.minifyCss())
      .pipe(gulp.dest('dist'));
  });

  gulp.task('dist_assets', function () {
    return gulp.src('app/assets/**/*', {base: 'app'})
      .pipe(gulp.dest('dist'));
  });

  gulp.task('dist_js', function () {
    var assets = $.useref.assets();
    return gulp.src('app/index.html')
      .pipe(assets)
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe(gulp.dest('dist'));
  });

  gulp.task('uncache', function () {
    return gulp.src('dist/index.html')
      .pipe($.uncache({
        append: 'hash',
        rename: true,
        srcDir: 'dist',
        distDir: 'dist'
      }))
      .pipe($.if(config.dist.minifyIndex, $.htmlmin(config.dist.options.htmlmin)))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('dist', ['dist_clear'], function () {
    return runSequence(['dist_partials', 'dist_css', 'dist_js', 'dist_assets'], ['minify_app', 'minify_vendors'], 'uncache');
  });

  gulp.task('minify_app', function () {
    return gulp.src(['dist/partials.js', 'dist/app.js'])
      .pipe($.concat('app.prod.js'))
      .pipe(gulp.dest('dist'))
      .pipe($.concat('app.js'))
      .pipe($.if(config.dist.minifyApp ? '*.js' : false, $.ngAnnotate()))
      .pipe($.if(config.dist.minifyApp ? '*.js' : false, $.uglify()))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('minify_vendors', function () {
    return gulp.src(['dist/vendors.js'])
      .pipe($.if(config.dist.minifyVendors ? '*.js' : false, $.uglify()))
      .pipe(gulp.dest('dist'));
  });
};

module.exports = Dist;
