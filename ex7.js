var koa = require('koa');

var app = new koa();

app.use(errorHandler());

app.use(function* () {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    try {
      yield next;
    } catch (error) {
      this.status = 500;
      this.body = "internal server error"
    }
  };
}

app.listen(process.argv[2]);
