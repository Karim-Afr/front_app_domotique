const navBtn = document.querySelector('.nav-burger'); 
const navMenu = document.getElementById('nav-menu-mobile'); 

navBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-on_off'); 
})


