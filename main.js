// Search box toggle
let search = document.querySelector('.search-box');
let searchIcon = document.querySelector('#search-icon');

if (searchIcon) {
    searchIcon.onclick = () => {
        search.classList.toggle('active');
        menu.classList.toggle('active');
    };
}

// Navbar menu toggle
let menu = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');

if (menuIcon) {
    menuIcon.onclick = () => {
        menu.classList.toggle('active');
        menu.classList.remove('active');
    };
}
window.onscroll=()=>{
     menu.classList.remove('active');
     search.classList.remove('active');
}
// Header shadow effect on scroll
let header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
}