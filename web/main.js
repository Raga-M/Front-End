var textSpeak="Type any text to speak";
const btn =document.getElementById("btn")
function text(e) {
   textSpeak=e.target.value;
   btn.addEventListener("click",()=>{
    e.target.value=""
})   
}
function speak() {
    const c=new SpeechSynthesisUtterance(textSpeak)
   return window.speechSynthesis.speak(c)
}