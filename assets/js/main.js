import * as contact from './contact.js';
import '../scss/main.scss';
import '../scss/_reset.scss';
import '../scss/_fonts.scss';
import '../scss/_mixins.scss';
import '../scss/_nav.scss';
import '../scss/_header.scss';
import '../scss/_about.scss';
import '../scss/_parallax.scss';
import '../scss/_animations.scss';
import '../scss/_footer.scss';
import '../scss/_contact.scss';
import '../scss/_offersSection.scss';
import '../scss/_carousel.scss';
import '../scss/_globals.scss';
import '../scss/_modal.scss';
import '../scss/_media.scss';

const pageID = document.querySelector('body');
const burgerBtn = document.getElementById('burgerBtn');
const burgerBtnMid = document.getElementById('burgerBtnMid');
const burgerBtnBot = document.getElementById('burgerBtnBot');
const navMobile = document.getElementById('navMobile');
const navMobileLinks = document.querySelectorAll('.nav__mobile--link');
const navDesktopLinks = document.querySelectorAll(`.nav__desktop--link`);
const footerInfo = document.getElementById('footerInfo');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// offersSection
const of_btns = document.querySelectorAll('.offers__selector-btns button');
const of_soloBtn = document.getElementById('solo');
const of_groupBtn = document.getElementById('group');

const demoPrice = document.getElementById('demoPrice');
const standardPrice = document.getElementById('standardPrice');
const premiumPrice = document.getElementById('premiumPrice');

// carousel
const shadowBox = document.getElementById('shadowBox');
const carouselBtns = document.querySelectorAll('.carousel__body-button--img');
const carouselCloseBtn = document.getElementById('carouselCloseBtn');
const carouselModal = document.getElementById('carouselModal');
const carouselArrowLeft = document.getElementById('carouselArrowLeft');
const carouselArrowRight = document.getElementById('carouselArrowRight');
const carouselImages = document.querySelectorAll('.offers__box-item--img');
const carouselCurrentImage = document.querySelector('.carousel__item--img');

// globals
const target = document.querySelectorAll('.spy');
let scroll_Y_Position;
let carouselImageSrc = [];
let carouselImageID = 0;
let carouselImageGroup = [];

const carouselOptions = (imagesSrc) => {
  carouselBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.id === 'carouselArrowRight') {
        carouselImageID++;
        imagesSrc = `./assets/img/offersDemo_HD_${carouselImageID}.jpg`;
        carouselCurrentImage.src = imagesSrc;
        console.log(carouselCurrentImage, carouselImageID, imagesSrc);

        if (carouselImageID > 1) {
          carouselImageID = -1;
        }
      }
      // else if (e.target.id === 'carouselArrowLeft') {
      //   carouselImageID--;
      //   if (carouselImageID < 0) {
      //     carouselImageID = 2;
      //   }
      // }
    });
  });
};

const openCarousel = () => {
  pageID.classList.add('noScroll');
  shadowBox.classList.add('box-shadow');
  carouselCurrentImage.src = `${carouselImageSrc}`;
  carouselModal.classList.add('dflex');
  carouselOptions();
  // console.log(carouselImageGroup, carouselImageSrc);
};

const closeCarousel = () => {
  carouselCloseBtn.addEventListener('click', () => {
    carouselImageID = 0;
    carouselCurrentImage.src = '';
    pageID.classList.remove('noScroll');
    shadowBox.classList.remove('box-shadow');
    carouselModal.classList.remove('dflex');
  });
};

if (pageID.id === 'offersPage') {
  closeCarousel();
  carouselImages.forEach((image) => {
    image.addEventListener('click', () => {
      carouselImageSrc.pop();
      carouselImageSrc.push(image.getAttribute('src'));
      carouselImageGroup.pop();
      carouselImageGroup.push(image.getAttribute('id'));
      openCarousel();
    });
  });
}

const offersBtnToggle = (e) => {
  if (!e.target.classList.contains('cta') && e.target === of_soloBtn) {
    of_soloBtn.classList.add('cta');
    of_groupBtn.classList.remove('cta');
    demoPrice.textContent = '$0';
    standardPrice.textContent = '$99';
    premiumPrice.textContent = '$299';
  } else if (e.target.classList.contains('cta') && e.target === of_soloBtn) {
    of_soloBtn.classList.remove('cta');
    of_groupBtn.classList.add('cta');
    demoPrice.textContent = '$50';
    standardPrice.textContent = '$299';
    premiumPrice.textContent = '$599';
  }

  if (!e.target.classList.contains('cta') && e.target === of_groupBtn) {
    of_groupBtn.classList.add('cta');
    of_soloBtn.classList.remove('cta');
    demoPrice.textContent = '$50';
    standardPrice.textContent = '$299';
    premiumPrice.textContent = '$599';
  } else if (e.target.classList.contains('cta') && e.target === of_groupBtn) {
    demoPrice.textContent = '$0';
    standardPrice.textContent = '$99';
    premiumPrice.textContent = '$299';
    of_groupBtn.classList.remove('cta');
    of_soloBtn.classList.add('cta');
  }
};

of_btns.forEach((btn) => {
  btn.addEventListener('click', offersBtnToggle);
});

// nav
burgerBtn.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  burgerBtnMid.classList.toggle('burgerActive');
  burgerBtnBot.classList.toggle('burgerActive');
});

navMobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active');
  });
});

window.onscroll = () => {
  scroll_Y_Position =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll_Y_Position >= 500) {
    scrollToTopBtn.classList.add('btnFadeIn');
    scrollToTopBtn.classList.remove('btnFadeOut');
  } else if (scroll_Y_Position < 500) {
    if (scrollToTopBtn.classList.contains('btnFadeIn')) {
      scrollToTopBtn.classList.remove('btnFadeIn');
      scrollToTopBtn.classList.add('btnFadeOut');
    }
  }
};

// footer

const date = new Date();
footerInfo.innerHTML = `&copy${date.getFullYear()} Forest Group Company Ltd`;

scrollToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
  });
});

// observer

const options = {
  threshold: [0.85, 1],
  rootMargin: '20px',
  // rootMargin: '50px 0px -150px 0px ',
};
const handleScrollSpy = (entries) => {
  entries.forEach((entry) => {
    // entry.target.style.opacity = entry.intersectionRatio - 0.25;
    let targetID = entry.target.id;

    if (!entry.isIntersecting) {
      return;
    } else if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
      const activeLink = document.querySelector(
        `.nav__desktop--link[href='#${targetID}']`
      );
      navDesktopLinks.forEach((link) => link.classList.remove('navActive'));
      activeLink.classList.add('navActive');
      console.log(
        `target to: <${targetID}> jego ratio to <${entry.intersectionRatio}>`
      );
    }
  });
};

const observer = new IntersectionObserver(handleScrollSpy, options);

// target.forEach((section) => {
//   observer.observe(section);
// });
