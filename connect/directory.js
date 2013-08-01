var connect = require('connect');

connect()
	.use(connect.logger('tiny'))
	.use(connect.directory('/Users/yize'))
	.listen(3000);