#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

console.log("waiting 25 seconds before starting the sending..")
 setTimeout(function() {


amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'topic_logs';
    var key = 'my.o';


    channel.assertExchange(exchange, 'topic', {
      durable: false
    });

    // TiMeOuT wItH JaVaScRipT :s
    var i = 0, maxCount = 3;
      function f() {

        var msg = "MSG_" + (i+1);
        channel.publish(exchange, key, Buffer.from(msg));
        console.log(" [x] Sent %s:'%s'", key, msg);
        i++;

        if (i < maxCount) {
          setTimeout(f, 3000);

        } else {
          setTimeout(function() { 
            connection.close(); 
            process.exit(0) 
          }, 500);
        }
      }

    f();


  });
});

 }, 25000);