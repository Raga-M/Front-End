var slider = document.querySelectorAll('.slider .slides');
var pre=document.getElementById('previous')
var next=document.getElementById('next')
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slider[currentSlide].className = 'slides';
  currentSlide = (currentSlide + 1) % slider.length;
  slider[currentSlide].className = 'slides box';
  if (currentSlide === 0) {
    slider[slider.length - 1].className = 'slides';
  } else {
    slider[currentSlide - 1].className = 'slides';
  }
}

pre.addEventListener('click',()=>{

pre.style.transform="scale(1.2)";
setInterval(()=>{
    pre.style.transform="scale(1)";},300)
// console.log("click")
if(currentSlide>0){
currentSlide--;
slider[currentSlide].className = ' box';
slider[currentSlide +1].className = 'slides'
}
else{
currentSlide=slider.length-1;

slider[currentSlide].className = ' box';
slider[currentSlide + 1].className = 'slides'
}
}


)
next.addEventListener('click',()=>{
    next.style.transform="scale(1.2)";
setInterval(()=>{
    next.style.transform="scale(1)";},300)

    if(currentSlide< slider.length -1){
    currentSlide++;
    slider[currentSlide].className = ' box';
    slider[currentSlide - 1].className = 'slides'
    }
    else{
    currentSlide=slider.length-1;
    
    slider[currentSlide].className = ' box';
    slider[currentSlide - 1].className = 'slides'}
    })

    