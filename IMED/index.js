#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
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

    channel.assertExchange(exchange, 'topic', {
      durable: false
    });

    channel.assertQueue('', {
      exclusive: true
    }, function(error2, q) {
      if (error2) {
        throw error2;
      }
      console.log(' [*] Waiting for logs. To exit press CTRL+C');

      var key = "my.o";
      channel.bindQueue(q.queue, exchange, key);

      channel.consume(q.queue, function(msg) {
      console.log("Consumed a message:  from my.o - publishing to my.i")


       setTimeout(function() {
        var new_msg = "Got " + msg.content.toString();
        key = "my.i"
        channel.publish(exchange, key, Buffer.from(new_msg));
       }, 1000)
   

      
      }, {
        noAck: true
      });
    });
  });
});
}, 5000);