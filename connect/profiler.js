
/**
 * Module dependencies.
 */

var connect = require('connect');

// $ curl -i http://localhost:3000/

var app  = connect()
	.use(connect.profile())
	.use(connect.favicon())
	.use(connect.static('public'))
	.use(function(req,res,next){
		res.end('hello world')
	})
	.listen(3000);