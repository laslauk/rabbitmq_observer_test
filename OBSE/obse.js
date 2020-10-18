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
      console.log(' [*] Waiting for logs from my.i and my.o. To exit press CTRL+C');

      var key = "#";
      channel.bindQueue(q.queue, exchange, key);

      channel.consume(q.queue, function(msg) {
       console.log("Consumed a message:  " + msg.toString() + " \n from my.o - publishing to my.i")

       fs = require('fs');
       fs.writeFile('messages.txt', msg.toString(), function (err) {
         if (err) return console.log(err);
         console.log(msg.toString() + " > messages.txt");
       });

      
      }, {
        noAck: true
      });
    });
  });
});