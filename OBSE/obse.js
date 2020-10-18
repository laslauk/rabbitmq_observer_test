#!/usr/bin/env node

const fs = require('fs')
const path = './messages.txt'

try {
  fs.unlinkSync(path)
} catch(err) {
  console.error(err)
}

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
       console.log("Consumed a message:  from my.o - publishing to my.i")

       let timestamp = new Date().valueOf();
       let topic = key;
       let message = msg;
       var text =  `${timestamp} Topic ${topic}: ${message}` 

       fs.appendFile('messages.txt', text, function (err) {
         if (err) return console.log(err);
        

         console.log("Written to messages.txt");
       });

      
      }, {
        noAck: true
      });
    });
  });
});