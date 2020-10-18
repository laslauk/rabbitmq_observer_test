var http = require('http');
var address = 'http://127.0.0.1'
var port = 8894;
const fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile('./messages.txt', 'utf8', function (err,data) {
        let msg = "";
        if (err) {
            msg = err;
        } else {
        msg = data;
          }   

          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(msg);
          res.end();

      });


    
}).listen(port);
console.log(`Server running at ${address}:${port}`);
