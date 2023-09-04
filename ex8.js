var koa = require('koa');
var Cookies = require('cookies')

var app = new koa();
app.keys = ['secret', 'keys'];

app.use(function* (next) {

    var viewCount = parseInt(this.cookies.get('view', {signed: true })) || 0;  

    viewCount++
    this.cookies.set('view', viewCount, { signed: true })

    this.body = `${viewCount} views`
    yield next;
  });

app.listen(process.argv[2]);