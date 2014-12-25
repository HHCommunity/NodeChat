var app, serve, route, sockets, server, port, io, usernames, numUsers;

// Modules
app = require('koa')();
route = require('koa-route');
serve = require('koa-static');

// Custom modules
sockets = require('./routes/sockets');

// Static Files
app.use(serve('./public'));

// HTTP Routing
app.use(route.get('/', function *() {
  serve('index.html');
}));

// Setting up a server
server = require('http').createServer(app.callback());
io = require('socket.io')(server);
port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('Server listening on port ' + port)
});

// Socket.IO Routing
io.on('connection', sockets);