
/**
 * Module dependencies.
 */

var connect = require('connect');

// $ curl -i http://localhost:3000/favicon.ico

var app = connect()
	.use(connect.favicon())
	.listen(3000);
