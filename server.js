
var express = require ('express');

var app= express();
var server= app.listen(3000);

app.use(express.static('public'));

console.log("Tali pogram");

var socket =require('socket.io');

var io = socket(server);

io.sockets.on('connection', newTaliConnection);

function newTaliConnection (socket) {
  console.log("new connection:" + socket.id);

 socket.on('mouse-out', mouseMsg);

	socket.on('encriptedMassage', stringMsg);


function stringMsg (data) {
	socket.broadcast.emit('encriptedMassage',data);
	console.log(data);
}

 function mouseMsg (data) {
 	socket.broadcast.emit('mouse-in', data);
 	//io.sockets.emit('mouse', data);
 	//console.log(data);
 }


}