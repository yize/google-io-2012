var connect = require('connect');

var app = connect()
	.use(connect.urlencoded())
	.use(form)
	.use(connect.methodOverride())
	.listen(3000)

function form(req, res, next) {
	console.log(req.method);
	if ('GET' !== req.method) return next();
	res.setHeader('Content-Type', 'text/html');
	res.end('<form method="post" enctype="multipart/form-data">'
		+ '<input type="text" name="name"/>'
		+ '<input type="submit" value="Sure" />'
		+ '<input type="_method" value="put">'
		+ '</form>');
}