var opn = require('opn');
var livereload = require('connect-livereload');
var express = require('express');

var Server = function (gulp) {

  gulp.task('server', function () {
    var server = express();
    server.use(livereload({port: 35729}));
    server.use(express.static('./app'));

    server.all('/*', function (req, res) {
      res.sendFile('index.html', { root: 'app' });
    });

    server.listen(5000);

    return opn('http://localhost:5000');

  });

};

module.exports = Server;
