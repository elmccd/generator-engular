var Dist = function (gulp, $, config) {

  gulp.task('dist_html', function () {
    return gulp.src([
      'app/modules/**/*.html',
      'app/common/**/*.html'
    ], {
      base: 'app'
    })
      .pipe($.if(config.dist.minifyHtml, $.minifyHtml()))
      .pipe(gulp.dest('dist'))
      .pipe($.ngHtml2js({
        moduleName: 'partials',
        prefix: '/'
      }))
      .pipe($.concat('partials.js'))
      .pipe(gulp.dest('dist'))
      .pipe($.uglify())
      .pipe($.concat('partials.min.js'))
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
      .pipe($.if(config.dist.minifyJS ? '*.js' : false, $.ngAnnotate()))
      .pipe($.if(config.dist.minifyJS ? '*.js' : false, $.uglify()))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('dist_all', ['dist_html', 'dist_css', 'dist_js', 'dist_assets']);

  gulp.task('dist', ['dist_all'], function () {
    return gulp.src(['dist/partials.min.js', 'dist/app.js'])
      .pipe($.concat('app.js'))
      .pipe(gulp.dest('dist'));
  });
};

module.exports = Dist;
