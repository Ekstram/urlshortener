// required to use sockets
var socket = io();

// Client may use application safely after page have loaded fully
$(document).ready(function() {

	// Listen sendUrl button
	$('#sendUrl').click(function(event) {
		event.preventDefault();
		
		
		var receive = {
			url: $('#urlInput').val()
		}
		
		$('#receiveStatus').empty('id');
		console.log('Url sent ('+JSON.stringify(receive)+')');
		
		// Send request
		socket.emit('sendUrlToSocket', JSON.stringify(receive.url));
		
	});

	// Socket triggers
	socket.on('sendShortUrlToClient', function(msg) {
		// Here we show shortened url to user
		
		
		// Dev area ***********************************************
		
		$('#receiveStatus').append('<p>Your url was sent to sockets succesfully! :3</p>');
		
	});

}); //End of document.ready
