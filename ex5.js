var koa = require('koa');
var parse = require('co-body');
var fs = require('fs')

var app = new koa();

app.use(function* (next) {
  // only accept POST request
  if (this.request.type === 'application/json') {
    this.body = {
      message: "hi!"
    }
  } else {
    this.body = "ok";
  }
});

app.listen(process.argv[2]);