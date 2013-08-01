
/**
 * Module dependencies.
 */

var connect = require('connect');

// $ curl http://localhost:3000/favicon.ico

var app = connect()
	.use(connect.logger())
	.listen(3000);
