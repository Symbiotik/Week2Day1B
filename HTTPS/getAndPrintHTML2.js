var https = require('https');

 var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  function getAndPrintHTML2(options) {

  https.get(options, function (response) {
    response.setEncoding('utf8');
    var buffer = "";
    response.on('data', function (data) {
      buffer += data;
      console.log(buffer)
    })
  });
}
getAndPrintHTML2 (options);