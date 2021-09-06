const socket = io('http://localhost:8000');

const sbtn = document.getElementById('sendbtn');
const messageInput = document.getElementById('chatbox')
const messageContainer = document.getElementById('txtmsg')

const append = (message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText= message;
    messageElement.classList.add('messages');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

sbtn.addEventListener('click',(e)=>{
    const message= messageInput.value;
    append(`You: ${message}`,'right');
    socket.emit('send',message);
    messageInput.value = '';
})

let name = prompt("Enter Your Name:");
console.log("working Hello")
socket.emit('new-user-joined' , name);

socket.on('user-joined',data=>{
append(`${name} Joined the chat`,"right")
})
socket.on('receive',data=>{
append(`${data.name}: ${data.message} `,"left")
})
