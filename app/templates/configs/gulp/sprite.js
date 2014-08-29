var spritesmith = require('gulp.spritesmith');

var Sprites = function (gulp, $, config) {
  gulp.task('sprite', function () {
    var spriteData = gulp.src('app/assets/sprites/**/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.' + config.options.cssPreprocessorExt,
      cssFormat: 'css',
      imgPath: 'assets/img/sprite.png'
    }));
    spriteData.img.pipe(gulp.dest('app/assets/img'));
    spriteData.css.pipe(gulp.dest('app/styles'));
  });
};

module.exports = Sprites;
