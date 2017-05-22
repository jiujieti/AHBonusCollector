// load HTTP module
var http = require('http'),
    fs = require('fs');

// create HTTP server and listen on port 8000
fs.readFile('./main.html', function (err, html) {
  if(err) {
    throw err;
  }
  http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();
  }).listen(8000);
});
