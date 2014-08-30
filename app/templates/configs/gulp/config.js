var argv = require('yargs').argv;

var Config = {};

Config.options = {
  cssPreprocessor: '<%= cssPreprocessor %>',
  cssPreprocessorExt: '<%= cssPreprocessor === "stylus" ? "styl" : (cssPreprocessor === "sass" ? "scss" : cssPreprocessor) %>'
};

Config.server = {
  port: 5000,
  liveReload: true,
  liveReloadPort: 35729,
  openBrowser: true,
  directory: 'app' // 'dist'
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

Config.dist = {
  'html2js': true,
  'minifyPartials': true,
  'minifyIndex': false,
  'minifyApp': true,
  'minifyVendors': false,
  'options': {
    'htmlmin': {
      removeComments: true,
      removeAttributeQuotes: true,
      collapseWhitespace: true
    },
    autoprefixer: [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ]
  }
};


if (argv.dist) {
  Config.server.directory = 'dist';
} else if (argv.app) {
  Config.server.directory = 'app';
}

if(argv.silent) {
  Config.server.openBrowser = false;
  Config.docs.openBrowser = false;
}


module.exports = Config;
