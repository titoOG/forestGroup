import '../scss/main.scss';
import '../scss/_reset.scss';
import '../scss/_fonts.scss';
import '../scss/_globals.scss';
import '../scss/_mixins.scss';
import '../scss/_nav.scss';
import '../scss/_header.scss';
import '../scss/_about.scss';
import '../scss/_offersSection.scss';
import '../scss/_parallax.scss';
import '../scss/_animations.scss';
import '../scss/_footer.scss';
import '../scss/_media.scss';

const burgerBtn = document.getElementById('burgerBtn');
const burgerBtnMid = document.getElementById('burgerBtnMid');
const burgerBtnBot = document.getElementById('burgerBtnBot');
const navMobile = document.getElementById('navMobile');
const navMobileLinks = document.querySelectorAll('.nav__mobile--link');
const navDesktop = document.getElementById('navDesktop');
const footerInfo = document.getElementById('footerInfo');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

let scroll_Y_Position;

burgerBtn.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  burgerBtnMid.classList.toggle('burgerActive');
  burgerBtnBot.classList.toggle('burgerActive');
});

const date = new Date();
footerInfo.innerHTML = `&copy${date.getFullYear()} Forest Group Company Ltd`;

scrollToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
  });
});

navMobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active');
  });
});

// window.addEventListener('scroll', () => {
//   // if (window.scrollY < 500) {
//   //   scrollToTopBtn.classList.add('btnFadeOut');
//   // }

//   if (window.scrollY >= 504) {
//     scrollToTopBtn.classList.add('btnFadeIn');
//   } else if (window.scrollY < 504) {
//     scrollToTopBtn.classList.remove('btnFadeIn');
//     scrollToTopBtn.classList.add('btnFadeOut');
//   }
// });

setInterval(() => {
  scroll_Y_Position =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll_Y_Position > 500) {
    scrollToTopBtn.classList.add('btnFadeIn');
    // scrollToTopBtn.style.opacity = '1';
  }
}, 100);

window.onscroll = () => {
  scroll_Y_Position =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll_Y_Position >= 500) {
    scrollToTopBtn.classList.add('btnFadeIn');
  } else if (scroll_Y_Position < 500) {
    if (scrollToTopBtn.classList.contains('btnFadeIn')) {
      scrollToTopBtn.classList.remove('btnFadeIn');
      scrollToTopBtn.classList.add('btnFadeOut');
    }
  }
};
