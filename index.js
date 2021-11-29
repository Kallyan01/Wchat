// const io = require('socket.io')(8000, {
//     cors: {
//         origin: ['http://127.0.0.1:5501']
//     }
// })

'use strict';
const express = require("express");
const socketIO = require('socket.io');
const PORT = process.env.PORT || 8000;
const path = require("path")
const app = express();
const staticPath = path.join(__dirname,"/public");




app.use(express.static(staticPath));

const server = app.listen(PORT,()=>{
    console.log("Listining PORT 8000")
});
const io = socketIO(server);



const users = {};


io.on('connection', socket => {
    console.log("Backend Connected")
    console.log("user connected: " + socket.id);
    socket.on('new-user-joined', name => {
        console.log("New user", name);
        users[socket.id] = name;
        socket.broadcast.emit("user-joined", name);
    });
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
    })
})