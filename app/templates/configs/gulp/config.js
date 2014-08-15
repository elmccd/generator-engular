var Config = {};

Config.options = {
  cssPreprocessor: 'stylus',
  cssPreprocessorExt: 'styl'
};

Config.server = {
  port: 5000,
  liveReload: true,
  liveReloadPort: 35731,
  openBrowser: true
};

Config.docs = {
  port: 5001,
  liveReload: true,
  liveReloadPort: 35732,
  openBrowser: true
};

Config.bootstrapPreview = {
  port: 5002,
  liveReload: true,
  liveReloadPort: 35733,
  openBrowser: true
};

Config.watch = {
  jshint: true,
  cssSourceMap: true, //when false livReload doesn't make full reload - faster
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
    '!app/**/*-spec.js'
  ],
  JS_SPEC: [
    'app/**/*-spec.js'
  ]
};

module.exports = Config;
