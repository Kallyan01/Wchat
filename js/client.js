const socket = io('http://localhost:8000');

const sbtn = document.getElementById('sendbtn');
const messageInput = document.getElementById('chatbox')
const messageContainer = document.getElementById('txtmsg')
let inpbtn= document.getElementById('inpbtn');
let inpname= document.getElementById('inpname');

const append = (name,message,position)=>{
    const messageElement = document.createElement('div');
    const messageName = document.createElement('div');
    // const messageTime = document.createElement('div');
    messageName.innerText=name;
    messageElement.innerText= message;
    messageName.classList.add('msgname');
    messageElement.appendChild(messageName);
    messageElement.classList.add('messages');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const wlcmmsg=(name)=>{
    const messageElement = document.createElement('div');
    const appearMsg = document.createElement('div');
    appearMsg.innerHTML=`${name} Joined The Chat`
    appearMsg.classList.add('appearmsg');
    messageElement.append(appearMsg);
    messageContainer.append(messageElement);
}
sbtn.addEventListener('click',(e)=>{
    const message= messageInput.value;
    append(`You` ,`${message}`,'right');
    socket.emit('send',message);
    messageInput.value = '';
})

// const name = prompt("Enter Your Name:");
inpbtn.addEventListener('click',nameinput)
async function nameinput(){
    
    let name = inpname.value;
    console.log(name)
}
const a= nameinput();
a.then((name)=>{
    socket.emit('new-user-joined' , name);
     socket.on('user-joined',name=>{
    // append(" ",`${name} Joined the chat`,"right")
    wlcmmsg(name);
    })
     socket.on('receive',data=>{
    append(`${data.name}:`, `${data.message} `,"left")
    })
})

