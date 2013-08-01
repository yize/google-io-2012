/**
 * Module dependencies.
 */

var connect = require('connect');

var app = connect()
	.use(function (req, res) {
		var body = '你好，世界';
//		console.log(body.length);
//		console.log(Buffer.byteLength(body,'utf-8'));
		res.setHeader('Content-Length', Buffer.byteLength(body,'utf-8'));
		res.setHeader('Powered by', 'Yize.com');
		res.end(body);
	})
	.listen(3000);