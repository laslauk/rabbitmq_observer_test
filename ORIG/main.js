#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }


  connection.createChannel(async function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'topic';
    var msg = process.argv.slice(2).join(' ') || 'Hello World!';

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });

    while(true) {

      setTimeout(function() {
      channel.publish(exchange, '', Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
    
     }, 3000);

  });



  setTimeout(function() { 
    connection.close(); 
    process.exit(0); 
  }, 500);
});

