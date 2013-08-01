
/**
 * Module dependencies.
 */

var connect = require('connect');

// $ curl -i http://localhost:3000/favicon.ico
// true defaults to 1000ms

var app = connect()
	.use(connect.logger({buffer:5000}))
	.use(connect.favicon())
	.listen(3000);