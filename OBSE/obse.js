#!/usr/bin/env node

const fs = require('fs')
const path = './messages.txt'
setTimeout(function() {
try {
  fs.unlinkSync(path)
  console.log("messages.txt cleared")
} catch(err) {
  console.log("no file to remove...")
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
      console.log("Consumed a message - writing to file")

   
       let timestamp = new Date().toISOString();
       let topic = msg.fields.routingKey.toString();
       let message = msg.content.toString();
       var text =  `${timestamp} Topic ${topic}: ${message} \n` 

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

}, 5000);