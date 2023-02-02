const express = require('express');
const socket = require("socket.io");
const app = express()


app.use(express.static("public"))

const server = app.listen(3000,()=>{
    console.log('listing to the port 3000');
})
const io = socket(server)

io.on('connection', (socket)=>{
    console.log('Made socket connection',socket)
})
