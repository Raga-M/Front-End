const icon = document.querySelector('.icon');
const nav = document.querySelector('nav ul');
icon.addEventListener('click', () => {
 nav.classList.toggle('show');
 icon.style.transition = '0.5s';
 if(icon.innerText==="✕"){
 
    icon.innerHTML='&#9776';}
    else{
        // icon.style.transform= '0.8s';
        icon.innerHTML='&#10005';}



});