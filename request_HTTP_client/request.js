var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')

.on('error', function (err) {
  console.log('Error: ', error);
})

.on('response', function (response){
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Headers: ', response.headers['content-type'])
  })

.pipe(fs.createWriteStream('./future.jpg'));
console.log('Downloading Image... ');
console.log("Download Complete. ")