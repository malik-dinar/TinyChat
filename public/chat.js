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

message.addEventListener('keypress', () => {
    socket.emit('typing', name.value);
 })

socket.on('message', (data)=>{
    answer.innerHTML ='';
    output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
})

socket.on('typing', (data) => {
    answer.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});

