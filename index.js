var i = 0;
var txt = 'WELCOME TO KBC';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('h1').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
document.querySelector('body').addEventListener('click',()=>{
    audio=new Audio("rename.mp3")
    audio.play()
})


