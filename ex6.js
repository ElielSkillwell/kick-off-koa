var koa = require('koa');

var app = new koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
    this.body = 'hello koa';
});

function responseTime() {
    return function* (next) {
        const start = new Date();
    // record start time
    next.set('X-Response-Time', str(new Date() - start) + 'ms');
    // set X-Response-Time head
    };
}

function upperCase() {
    return function* (next) {
        this.body = this.req.body.toUpperCase()
    };
}

app.listen(process.argv[2]);