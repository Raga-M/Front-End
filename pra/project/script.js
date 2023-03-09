const icon = document.querySelector('.icon');
const nav = document.querySelector('nav ul');

icon.addEventListener('click', () => {
 nav.classList.toggle('show');
});