var koa = require('koa');
var session = require('koa-session')

var app = new koa();
app.keys = ['secret', 'keys'];

app.use(session(app))

app.use(function* (next) {

    let viewCount = this.session.views || 0

    this.session.views = ++viewCount
    this.body = `${viewCount} views`
    yield next;
  });

app.listen(process.argv[2]);