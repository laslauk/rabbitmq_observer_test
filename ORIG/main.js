#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }


  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'topic';
   

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });

    // TiMeOuT wItH JaVaScRipT :s
    var i = 0, maxCount = 2;
      function f() {
        var msg = "MSG_ " + i;
        channel.publish(exchange, '', Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
        i++;
        if (i < maxCount) {
          setTimeout(f, 3000);
        }
      }

    f();
  });

  setTimeout(function() { 
    connection.close(); 
    process.exit(0); 
  }, 500);
});