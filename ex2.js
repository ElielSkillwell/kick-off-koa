var koa = require('koa');

var app = new koa();
var port = process.argv[2];

app.use(function *(next) {
    // you can set the response body in handler like this
    if (this.path === '/404') this.body = 'page not found';
    else if (this.path === '/500') this.body = 'internal server error';
    else this.body = 'hello koa';
});

app.listen(port);
