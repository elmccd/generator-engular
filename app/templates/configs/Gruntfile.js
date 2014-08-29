module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');

  grunt.initConfig({
    ngdocs: {
      options: {
        dest: 'docs',
        scripts: [
          'dist/vendors.js',
          'dist/app.js'
        ],
        html5Mode: false,
        startPagegrunt: '/api',
        title: 'Docs',
        titleLink: '/',
        bestMatch: true
      },
      api: {
        src: ['dist/app.prod.js'],
        title: 'API Documentation'
      }
    }
  });

  grunt.registerTask('default', ['ngdocs']);

};
