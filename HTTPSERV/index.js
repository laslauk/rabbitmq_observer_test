#!/usr/bin/env bash
var http = require('http');
var address = 'http://127.0.0.1'
var port = 8894;
const fs = require('fs');

http.createServer(function (req, res) {

console.log("whee")
    fs.readFile('/usr/src/app/messages.txt', 'utf8', function (err,data) {
        let msg = "";
        if (err) {
            msg = err;
        } else {
        msg = data;
        console.log(msg);
        }   

          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write(msg.toString());
          res.end();

      });


    
}).listen(port);
console.log(`Server running at ${address}:${port}`);
