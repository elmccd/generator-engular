var Config = {};

Config.options = {
  cssPreprocessor: '<%= cssPreprocessor %>',
  cssPreprocessorExt: '<%= cssPreprocessor === "stylus" ? "styl" : (cssPreprocessor === "sass" ? "scss" : cssPreprocessor) %>'
};

Config.server = {
  port: 5000,
  liveReload: true,
  liveReloadPort: 35729,
  openBrowser: true
};

Config.docs = {
  port: 5001,
  openBrowser: true
};

Config.watch = {
  jshint: true,
  cssSourceMap: true,
  updateDocs: true
};

Config.files = {
  CSS_APP: [
    'app/common/**/*.' + Config.options.cssPreprocessorExt,
    'app/modules/**/*.' + Config.options.cssPreprocessorExt,
    'app/styles/**/*.' + Config.options.cssPreprocessorExt,
    '!app/styles/themes/**/*.' + Config.options.cssPreprocessorExt
  ],
  CSS_BOOTSTRAP: [
    'app/styles/themes/**/*.' + Config.options.cssPreprocessorExt
  ],
  HTML: [
    'app/**/*.html',
    '!app/bower_components/**/*.html'
  ],
  JS: [
    'app/common/**/*.js',
    'app/modules/**/*.js',
    'app/app.js',
    '!app/**/*.unit.js',
    '!app/**/*.e2e.js'
  ],
  SPRITES: [
    'app/assets/sprites/**/*.png'
  ]
};

module.exports = Config;
