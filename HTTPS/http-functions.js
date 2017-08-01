var https = require('https');
module.exports = function getHTML (options, callback) {
 https.get(options, function (response) {
    response.setEncoding('utf8');

    var buffer = "";
    response.on('data', function (data) {
      buffer += data;
      callback(buffer);
    });
  });
};
