var route, app, server, io;

app = require('koa')();
route = require('koa-route');

app.use(route.get('/', function *(){
  this.body = 'Hello, Moto!';
}));

server = require('http').createServer(app.callback());
io = require('socket.io')(server);
server.listen(process.env.PORT || 3000);