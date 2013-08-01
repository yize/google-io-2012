
/**
 * Module dependencies.
 */

var connect = require('connect');

connect()
	.use(connect.static(__dirname + '/public',{maxAge:0 }))
	.use(function(req,res){
		res.setHeader('Content-Type', 'text/html');
		res.end('<img src="/tobi.jpeg" />')
	})
	.listen(3000);

//connect(
//    connect.static(__dirname + '/public', { maxAge: 0 })
//  , function(req, res) {
//    res.setHeader('Content-Type', 'text/html');
//    res.end('<img src="/tobi.jpeg" />')
//  }
//).listen(3000);