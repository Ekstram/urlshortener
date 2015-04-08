var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

//Require database
/*
var Database = require('./database/database');
var database = new Database();
*/

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Listeners and senders
io.on('connection', function(socket){
  var address = socket.handshake.address;
  console.log("New connection from " + address);

	//SOCKETS *************************************
	
	/*
	//Receive data from client and query it in database
  	socket.on('receiverName', function(msg){
  	msg = JSON.parse(msg);
   	console.log('message: ' + msg);
      
   	// Do a SQL query in searchEmployee hanlder
    	// database.saveUrl(msg.word, socket);
  	});
  	
  	//Receive data from database and send it to client
  	socket.on('receiverName', function(msg){
  		// socket.emit('sendShortUrlToClient', JSON.stringify(msg))
  		console.log('received' + message);
  	});
  	*/
  	
  	//DEV AREA - TEST USE ONLY ****************************
  	
  	//Receive data from database and send it to client
  	socket.on('sendUrlToSocket', function(msg){
  		console.log('received ' + msg);
  		socket.emit('sendShortUrlToClient')
  	});
  	
});

//Listen port 3000 traffic
http.listen(3000, function(){
  console.log('listening on http://localhost:'+port);
});
