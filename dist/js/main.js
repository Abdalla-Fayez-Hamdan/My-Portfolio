//select DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//set initial state of the menu
let isMenuOpen = false;

menuBtn.addEventListener('click' , ToggleMenu);

function ToggleMenu(){
    if(!isMenuOpen){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => 
            item.classList.add('show')
        );
        isMenuOpen = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => 
            item.classList.remove('show')
        );
        isMenuOpen = false;
    }
}

particlesJS('particles-js', 
{
    "particles": {
        "number": {
            "value": 75
        },
        "color": {
            "value": "#ffffff"
        },
        "size": {
            "value": 2.2,
            "anim": {
                "enable": true,
                "speed": 22
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#5bf45e",
            "opacity": 0.4,
            "width": 1
        }
    }
}
, function() {
    console.log('callback - particles.js config loaded');
});
