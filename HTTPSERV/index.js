#!/usr/bin/env bash
var http = require('http');
var address = 'http://127.0.0.1'
var port = 8894;
const fs = require('fs');




http.createServer(function (req, res) {


    fs.readFile('messages.txt', 'utf8', function (err,data) {
        let msg = "";
        if (err) {
            msg = err;
        } else {
        msg = data;
        console.log(msg);
        }   

        console.log(__dirname);
        fs.readdir('./', (err, files) => {
          files.forEach(file => {
            console.log(file);
          });
        });
        console.log("AA-");
        fs.readdir('/usr/src/app/', (err, files) => {
            files.forEach(file => {
              console.log(file);
            });
          });
        
     

          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write(msg.toString());
          res.end();

      });


    
}).listen(port);
console.log(`Server running at ${address}:${port}`);
