const hamburgerIcon = document.querySelector('#hamburgerIcon');
const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#closeIcon');
const header = document.querySelector('header');
const nav = document.querySelector('nav');

const navLinks = document.querySelectorAll('nav a');

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburgerIcon.classList.toggle('active');
    header.classList.toggle('open-menu');
    menuIcon.classList.toggle('nav-menu-hamburger');
});

nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('nav-menu-hamburger');
});

window.addEventListener('click', () => {
    menuIcon.classList.remove('nav-menu-hamburger');
});


let hideTimer = null;

// Function to show header and auto-hide after 5 seconds
function showHeader() {
    clearTimeout(hideTimer);
    header.classList.add('visible');
    header.classList.remove('hide');

    hideTimer = setTimeout(() => {
        header.classList.remove('visible');
        header.classList.add('hide');
    }, 5000);
}

// Show header when mouse at top of screen
document.addEventListener('mousemove', (e) => {
    if (e.clientY <= 10) {
        showHeader();
    }
});

// Show header after load, then hide after delay
window.addEventListener('load', () => {
    setTimeout(() => {
        header.classList.add('hide');
    }, 5000);
});

// Click anywhere on window shows header
window.addEventListener('click', () => {
    showHeader();
});

// Scroll shows header
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (Math.abs(window.scrollY - lastScrollY) > 10) {
        showHeader();
        lastScrollY = window.scrollY;
    }
});

function keepHeaderVisible() {
    clearTimeout(hideTimer);
    header.classList.add('visible');
    header.classList.remove('hide');
}

function startHideTimer() {
    hideTimer = setTimeout(() => {
        header.classList.remove('visible');
        header.classList.add('hide');
    }, 5000);
}

// Hover (desktop)
header.addEventListener('mouseenter', keepHeaderVisible);
header.addEventListener('mouseleave', startHideTimer);

// Touch (mobile)
header.addEventListener('touchstart', keepHeaderVisible);
header.addEventListener('touchend', startHideTimer);
