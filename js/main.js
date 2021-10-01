let chat = document.getElementById('chat');
let chatbox = document.getElementById('chatbox');
let status = document.getElementById('status');
let calls = document.getElementById('calls');
let container = document.getElementById('cntnr');
let backbtn = document.getElementById('goback');
let chatin = document.getElementById('chatclk');
let chatbtn = document.getElementById('msgbtn');

chatbox.addEventListener('keyup', () => {
    if (chatbox.value.length != 0) {
        console.log("entered")
        chatbtn.classList.remove('fa-microphone')
        chatbtn.classList.add('fa-paper-plane')
    }
    else
    {
        console.log("entered")
        chatbtn.classList.add('fa-microphone')
        chatbtn.classList.remove('fa-paper-plane')
    }
})
const sendbtn = () => {
    // console.log(document.getElementById('chatbox').value.length)
    chatbtn.classList.remove('fa-microphone')
    chatbtn.classList.add('fa-paper-plane')

}
chat.addEventListener('click', function () {
    console.log("clicked");
    container.style = "transform: translateX(0%);transition: transform .8s ease-in-out;";
});
status.addEventListener('click', function () {
    console.log("clicked");
    container.style = "transform: translateX(-34%);transition: transform .8s ease-in-out;";
});
calls.addEventListener('click', function () {
    console.log("clicked");
    container.style = "transform: translateX(-67%);transition: transform .8s ease-in-out;";
});
backbtn.addEventListener('click', function () {
    document.querySelector('.inchat').style = 'display:none';
})
chatin.addEventListener('click', function () {
    document.querySelector('.inchat').style = 'display:block';
})
var tabwrap = document.getElementById('tabwrap');
var btns = tabwrap.getElementsByClassName('tablnk');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        console.log('ok')
        var current = tabwrap.getElementsByClassName("active");
        current[0].className = current[0].classList.remove("active");;
        this.className += " active";

    });
}
var loadend = document.querySelector('.loadscreen')
function loaden() {
    console.log('ended');
    loadend.style = "display:none;";
}
var trgr = document.getElementById('cmngsoon');
function warningclose() {
    trgr.style = "opacity:0;transition:all .8s ease-in-out";
}
function warning() {
    trgr.style = "opacity:1;transition:all .8s ease-in-out";
    setTimeout(warningclose, 1000);
}

let dotbtn = document.getElementById("dotbtn");
let dotmenu = document.getElementById("dotmenu");
let body = document.querySelector("body");
var menu_val = window.getComputedStyle(dotmenu)
dotbtn.addEventListener("click", () => {
    dotmenu.style = "height: 250px !important;width: 150px !important;opacity:1 !important;"
})
body.addEventListener("click", () => {
    if (menu_val.height == "250px") {
        dotmenu.style = "height: 0px !important;width: 0px !important;opacity:0 !important;"
    }
})



