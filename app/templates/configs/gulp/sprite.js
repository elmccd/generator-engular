var spritesmith = require('gulp.spritesmith');

var Sprites = function (gulp, $, config) {

  gulp.task('sprite', function () {
    var spriteData = gulp.src(config.files.ICONS + '/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.' + config.options.cssPreprocessorExt,
      cssFormat: 'css',
      imgPath: 'assets/img/sprite.png'
    }));
    spriteData.img.pipe(gulp.dest('app/assets/img'));
    spriteData.css.pipe(gulp.dest('app/styles'));
  });

  gulp.task('svg', function () {
    return gulp.src(config.files.SVG + '/*.svg')
      .pipe($.iconfontCss({
        fontName: 'svgIcons',
        targetPath: '../../../../app/styles/svg-icons.' + config.options.cssPreprocessorExt,
        fontPath: '/assets/font/svg-icons/'
      }))
      .pipe($.iconfont({
        fontName: 'svgIcons'
      }))
      .pipe(gulp.dest("./app/assets/font/svg-icons"));
  });
};

module.exports = Sprites;
