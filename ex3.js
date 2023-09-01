var koa = require('koa');
var _ = require('koa-route')
var parse = require('co-body');

const app = new koa();
var port = process.argv[2];


app.use(function *(next) {
    this.req.body = yield parse.text(this);
    this.body = this.req.body.split('=')[1].toUpperCase();
    yield next;
});

app.listen(port);