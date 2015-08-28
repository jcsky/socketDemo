var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log('get /');
});
app.get('/aaa', function(req, res){
  res.sendFile(__dirname + '/index1.html');
  console.log('get /aaa');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('io.emit='+msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
