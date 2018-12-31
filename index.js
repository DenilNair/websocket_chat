var express=require('express');
var socket=require('socket.io');
//App setup
var app=express();
var server=app.listen(4000,function(){
	console.log("listening to prt no. 4000")});

//static files
app.use(express.static('public'));



//socket setup
var io=socket(server);
//listening to client ..when connection made
io.on('connection',function(socket){
	console.log("Made socket connection",socket.id);

//sending socket id to client

	//listening to mess from clientt

	socket.on('chat',function(data){console.log("reached there");
		io.sockets.emit('chat',data);

	console.log("denil");

	console.log(socket.id);

	});
});