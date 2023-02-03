const express = require('express');
require('dotenv').config()
const app = express()

const http = require('http').Server(app);
const io = require('socket.io')(http);
global.io = io

app.use(express.static("public"))

const chatRouter = require('./src/routes/chat')
app.use('/', chatRouter)

require('./src/socket/socket')

http.listen(process.env.PORT, function () {
    console.log('listening on Port : ' + process.env.PORT);
});
