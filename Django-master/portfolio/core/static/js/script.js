'use strict';

// Show hidden menu
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLink = document.querySelectorAll('.nav-link');

// Show mobile menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
// Hide mobile menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
// Hide mobile menu if link clicked
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// =================================================================
// Portfolio Swiper
// =================================================================

let swiper = new Swiper('.portfolio-container', {
  cssMode: true,
  // loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true,
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  centeredSlides: true,
  grabCursor: true,
});

// =================================================================
// Scroll section active link
// =================================================================

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// =================================================================
// Change background header
// =================================================================

function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

// =================================================================
// Show scroll to top
// =================================================================

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');

  if (this.scrollY >= 560) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollTop);

// =================================================================
// Dark light theme
// =================================================================

const themeButton = document.getElementById('theme-button'),
  darkTheme = 'dark-theme',
  iconTheme = 'uil-sun';

// Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme'),
  selectedIcon = localStorage.getItem('selected-icon');

// Get current theme (dark or light mode)
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Safe current theme to the users selected theme
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
// =================================================================

const redEl = document.getElementById('red'),
  greenEl = document.getElementById('green'),
  blueEl = document.getElementById('blue'),
  purpleEl = document.getElementById('purple'),
  rootEl = document.querySelector(':root');

greenEl.addEventListener('click', () => {
  rootEl.style.setProperty('--hue-color', '97');
});
blueEl.addEventListener('click', () => {
  rootEl.style.setProperty('--hue-color', '210');
});
redEl.addEventListener('click', () => {
  rootEl.style.setProperty('--hue-color', '11');
});
purpleEl.addEventListener('click', () => {
  rootEl.style.setProperty('--hue-color', '268');
});
// redEl.addEventListener("click", () => {
//   console.log("asdasd");
//   navMenu.classList.add("show-menu")

// })
