'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
      console.log('Config Variables:');
      console.log('-----------------');
      console.log('HOST : ' + process.env.HOST);
      console.log('PORT : ' + process.env.PORT);
      console.log('NODE_ENV : ' + process.env.NODE_ENV);
      console.log('DB_HOST : ' + process.env.DB_HOST);
      console.log('DB_PORT : ' + process.env.DB_PORT);
      console.log('DB_NAME : ' + process.env.DB_NAME);
      console.log('DB_USER : ' + process.env.DB_USER);
      console.log('DB_PASSWORD : ' + process.env.DB_PASSWORD);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
