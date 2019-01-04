//make coonection
let socket=io.connect('https://glacial-peak-19207.herokuapp.com/');
console.log(socket.id);
//Query DOm
var message =document.getElementById('message');
var  handle=document.getElementById('handle');
var btn=document.getElementById('send');
var output=document.getElementById('output');
document.getElementById('message').value="";



//emit Eventsss
btn.addEventListener('click',function(){console.log("reached herre");
	socket.emit('chat',{
		message:message.value,
		handle:handle.value,
		sock:socket.id
	});
});

socket.on('connect',()=>{
	var s1=socket.id;
	console.log(s1);
	console.log(socket.id);
})
//listen event from server

socket.on('chat',function(data){
	console.log("reached herre again");
	var con='container';
	
	console.log("own socket");
	console.log("Socket ID ",socket.id);
	console.log("Other socket");
	
	if(socket.id==data.sock){
	console.log("You only send data");
		//console.log(flag);
		var d=new Date();
		console.log(d.toLocaleTimeString());
		var t1=d.toLocaleTimeString();
	output.innerHTML+='<div class='+con+'><p><strong>'+data.handle+':</strong>'+data.message+'<span class="time-right">'+t1+'</span></p></div>';

}
else{console.log("Message from socket ID ",data.sock);
		var d=new Date();
		console.log(d.toLocaleTimeString());
		var t1=d.toLocaleTimeString();
output.innerHTML+='<div class= darker><p><strong>'+data.handle+':</strong>'+data.message+'<span class="time-right">'+t1+'</span></p></div>';	

}

});
