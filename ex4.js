var koa = require('koa');
var parse = require('co-body');
var fs = require('fs')

var app = new koa();

app.use(function* (next) {
  // only accept POST request
  if (this.path === '/json') {
    this.body = {
      foo: "bar"
    }
  } else if (this.path === '/stream') {
    this.body = fs.createReadStream(process.argv[3]);
  }
});

app.listen(process.argv[2]);