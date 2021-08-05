let chat= document.getElementById('chat');
let status= document.getElementById('status');
let calls= document.getElementById('calls');
let container= document.getElementById('cntnr');
let backbtn= document.getElementById('goback');
let chatin= document.getElementById('chatclk');

chat.addEventListener('click',function(){
    console.log("clicked");
container.style="transform: translateX(0%);transition: transform .8s ease-in-out;";
});
status.addEventListener('click',function(){
    console.log("clicked");
container.style="transform: translateX(-34%);transition: transform .8s ease-in-out;";
});
calls.addEventListener('click',function(){
    console.log("clicked");
container.style="transform: translateX(-67%);transition: transform .8s ease-in-out;";
});
backbtn.addEventListener('click',function(){
    document.querySelector('.inchat').style='display:none';
})
chatin.addEventListener('click',function(){
    document.querySelector('.inchat').style='display:block';
})
var tabwrap = document.getElementById('tabwrap');
var btns = tabwrap.getElementsByClassName('tablnk');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
      console.log('ok')
  var current = tabwrap.getElementsByClassName("active");
  current[0].className = current[0].classList.remove("active");;
  this.className += " active";

  });
}
var loadend= document.querySelector('.loadscreen')
function loaden()
{
    console.log('ended');
loadend.style="display:none;";
}
