const socket = io(window.location.origin)

const message = document.getElementById('message'),
    name = document.getElementById('name'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    answer = document.getElementById('answer');

btn.addEventListener("click", ()=>{
    socket.emit('message',{
        message:message.value,
        name: name.value
    });
    message.value ='';
})