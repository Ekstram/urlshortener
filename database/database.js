function Database() {

  if(typeof this.pg == "undefined") {
    this.init();
  }
}

Database.prototype.init = function() {

},

//Save url
Database.prototype.saveUrl = function(word, socket) {
	this.pg = require('pg');
	this.connection = "postgres://database:testi1234@localhost/database";
	var pgClient = new this.pg.Client(this.connection);

	pgClient.connect(function(err, client) {
		if(err) {
			console.log('Error: ', err);
		}
	
		// Change query line for postgresql
		pgClient.query('INSERT INTO urls(url) VALUES('+word+');', function(err, result) {
		
			if(err) {
				console.log('Error in query: ', err);
			}
			socket.emit('receiveData', result);
			client.end();
			
		}); // End client.query


	}); // End pg.connect

}; // End prototype.saveUrl

module.exports = Database;