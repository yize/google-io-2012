/**
 * Module dependencies.
 */

var connect = require('connect');

var foo = connect();
foo.use('/', function(req, res) { res.json("Foo"); });
var bar = connect();
bar.use('/', function(req, res) { res.json("Bar"); });
var baz = connect();
baz.use('/', function(req, res) { res.json("Baz"); });

connect()
	.use(connect.vhost('foo', foo))
	.use(connect.vhost('bar', bar))
	.use(connect.vhost('baz', baz))
	.listen(3000);
/* Add the following to your /etc/hosts file
 127.0.0.1 foo
 127.0.0.1 bar
 127.0.0.1 baz
 */