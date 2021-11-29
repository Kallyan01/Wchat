const socket = io();

const sbtn = document.getElementById('sendbtn');
const messageInput = document.getElementById('chatbox')
const messageContainer = document.getElementById('txtmsg')
let inpbtn = document.getElementById('inpbtn');
let inpname = document.getElementById('inpname');
let nameBox = document.getElementById('ncont');

const append = (name, message, position) => {
    const messageElement = document.createElement('div');
    const messageName = document.createElement('div');
    // const messageTime = document.createElement('div');
    messageName.innerText = name;
    messageElement.innerText = message;
    messageName.classList.add('msgname');
    messageElement.appendChild(messageName);
    messageElement.classList.add('messages');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const wlcmmsg = (name) => {
    const messageElement = document.createElement('div');
    const appearMsg = document.createElement('div');
    appearMsg.innerHTML = `${name} Joined The Chat`
    appearMsg.classList.add('appearmsg');
    // messageElement.appendChild(appearMsg);
    messageContainer.append(appearMsg);
}
sbtn.addEventListener('click', (e) => {
    const message = messageInput.value;
    append(`You`, `${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
})

// const name = prompt("Enter Your Name:");
function nameinput() {
    return inpname.value;
}
console.log("hi")
inpbtn.addEventListener('click', async () => {
    nameBox.style="display:none;"
    socket.emit('new-user-joined', await nameinput());
    socket.on('user-joined', name => {
        // append(" ",`${name} Joined the chat`,"right")
        wlcmmsg(name);
    })
    socket.on('receive', data => {
        append(`${data.name}:`, `${data.message} `, "left")
    })
})
