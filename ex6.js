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
        yield next;
        const end = new Date() - start;
        this.set('X-Response-Time', end + 'ms');    
    };
}

function upperCase() {
    return function* (next) {
        yield next;
        if (this.body) {
          this.body = this.body.toUpperCase();
        }
    };
}


app.listen(process.argv[2]);