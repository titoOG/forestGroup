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
import '../scss/_carousel.scss';
import '../scss/_globals.scss';
import '../scss/_404.scss';
import '../scss/_offersSection.scss';
import '../scss/_modal.scss';
import '../scss/_media.scss';

import imgDemo0 from '../img/offersDemo_HD_0.jpg';
import imgDemo1 from '../img/offersDemo_HD_1.jpg';
import imgDemo2 from '../img/offersDemo_HD_2.jpg';

import imgStand0 from '../img/offersStand_HD_0.jpg';
import imgStand1 from '../img/offersStand_HD_1.jpg';
import imgStand2 from '../img/offersStand_HD_2.jpg';

import imgPrem0 from '../img/offersPrem_HD_0.jpg';
import imgPrem1 from '../img/offersPrem_HD_1.jpg';
import imgPrem2 from '../img/offersPrem_HD_2.jpg';

const pageID = document.querySelector('body');
const burgerBtn = document.getElementById('burgerBtn');
const burgerBtnMid = document.getElementById('burgerBtnMid');
const burgerBtnBot = document.getElementById('burgerBtnBot');
const navLogo = document.querySelector('.nav__logo');
const navMobile = document.getElementById('navMobile');
const navMobileLinks = document.querySelectorAll('.nav__mobile--link');
const navDesktopLinks = document.querySelectorAll('.nav__desktop--link');
const footerInfo = document.getElementById('footerInfo');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

const of_btns = document.querySelectorAll('.offers__selector-btns button');
const of_soloBtn = document.getElementById('solo');
const of_groupBtn = document.getElementById('group');
const demoPrice = document.getElementById('demoPrice');
const standardPrice = document.getElementById('standardPrice');
const premiumPrice = document.getElementById('premiumPrice');

const shadowBox = document.getElementById('shadowBox');
const carouselBtns = document.querySelectorAll('.carousel__body-button--img');
const carouselModal = document.getElementById('carouselModal');
const carouselImages = document.querySelectorAll('.offers__box-item--img');
const carouselCurrentImage = document.getElementById('carouselCurrentImage');
const target = document.querySelectorAll('.spy');

let scroll_Y_Pos =
  document.documentElement.scrollTop || document.body.scrollTop;

let targetID;
let activeLink;
let carouselImageSrc = [];
let carouselImageGroup = [];
let carouselImageID = 0;
let windowWidth = [];
let windowHeight = [];

let carouselGroup_D = [];
let carouselGroup_S = [];
let carouselGroup_P = [];

carouselGroup_D.push(imgDemo0, imgDemo1, imgDemo2);
carouselGroup_S.push(imgStand0, imgStand1, imgStand2);
carouselGroup_P.push(imgPrem0, imgPrem1, imgPrem2);

const carouselGroupChecking = () => {
  if (carouselImageGroup == 'carouselDemoGroup') {
    carouselImageSrc[0] = carouselGroup_D[carouselImageID];
  } else if (carouselImageGroup == 'carouselStandGroup') {
    carouselImageSrc[0] = carouselGroup_S[carouselImageID];
  } else if (carouselImageGroup == 'carouselPremGroup') {
    carouselImageSrc[0] = carouselGroup_P[carouselImageID];
  }
};

const carouselOptions = () => {
  carouselBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.style.pointerEvents = 'none';

      setTimeout(() => {
        e.target.style.pointerEvents = 'auto';
      }, 300);

      if (e.target.id === 'carouselCloseBtn') {
        closeCarousel();
      }

      if (e.target.id === 'carouselArrowRight') {
        carouselImageID++;
        if (carouselImageID > 2) {
          carouselImageID = 0;
        }
        carouselGroupChecking();
        carouselCurrentImage.src = carouselImageSrc;
      } else if (e.target.id === 'carouselArrowLeft') {
        carouselImageID--;
        if (carouselImageID < 0) {
          carouselImageID = 2;
        }
        carouselGroupChecking();
        carouselCurrentImage.src = carouselImageSrc;
      }
    });
  });
};

const openCarousel = () => {
  pageID.classList.add('noScroll');
  shadowBox.classList.add('box-shadow');
  carouselCurrentImage.src = `${carouselImageSrc}`;
  carouselModal.style.display = 'flex';
  carouselModal.classList.add('carouselImagesIn');
};

const closeCarousel = () => {
  carouselModal.style.display = 'none';
  carouselImageSrc.length = 0;
  carouselImageGroup.length = 0;
  carouselImageID = 0;
  carouselCurrentImage.src = '';
  pageID.classList.remove('noScroll');
  shadowBox.classList.remove('box-shadow');
};

if (pageID.id === 'offersPage') {
  carouselOptions();

  window.addEventListener('click', (e) => {
    if (e.target.id === 'shadowBox') {
      closeCarousel();
    }
  });

  window.addEventListener('resize', () => {
    windowWidth.pop();
    windowWidth.push(window.innerWidth);
    if (windowWidth < 150) {
      closeCarousel();
    } else if (windowHeight < 300) {
      closeCarousel();
    }
  });

  carouselImages.forEach((image) => {
    image.addEventListener('click', () => {
      if (windowWidth >= 150) {
        carouselModal.classList.remove('carouselFadeIn');
        carouselImageSrc.push(image.getAttribute('src'));
        carouselImageGroup.push(image.getAttribute('id'));
        openCarousel();
      }
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

const date = new Date();
footerInfo.innerHTML = `&copy${date.getFullYear()} Forest Group Company Ltd`;

const options = {
  rootMargin: '0px 0px -45% 0px ',
};

const handleScrollSpy = (entries) => {
  entries.forEach((entry) => {
    targetID = entry.target.id;

    if (pageID.id === 'errorPage') {
      activeLink = document.querySelector(`.nav__desktop--link[href='#home']`);
      activeLink.classList.add('navActive');
    }

    if (!entry.isIntersecting) {
      if (activeLink == undefined) {
        if (windowHeight <= 855) {
          activeLink = document.querySelector(
            `.nav__desktop--link[href='#home']`
          );
          activeLink.classList.add('navActive');
        }
      }
      return;
    } else if (entry.isIntersecting) {
      activeLink = document.querySelector(
        `.nav__desktop--link[href='#${targetID}']`
      );
      navDesktopLinks.forEach((link) => link.classList.remove('navActive'));
      activeLink.classList.add('navActive');
    }
  });
};

of_btns.forEach((btn) => {
  btn.addEventListener('click', offersBtnToggle);
});

burgerBtn.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  navLogo.classList.toggle('navLogoLeft');
  navLogo.classList.toggle('navLogoCenter');
  burgerBtnMid.classList.toggle('burgerActive');
  burgerBtnBot.classList.toggle('burgerActive');
});

navMobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active');
  });
});

function scrollBtnChecking() {
  if (scroll_Y_Pos >= 500) {
    scrollToTopBtn.classList.add('btnFadeIn');
    scrollToTopBtn.classList.remove('btnFadeOut');
  } else if (scroll_Y_Pos < 500) {
    if (scrollToTopBtn.classList.contains('btnFadeIn')) {
      scrollToTopBtn.classList.remove('btnFadeIn');
      scrollToTopBtn.classList.add('btnFadeOut');
    }
  }
}

window.addEventListener('resize', () => {
  windowHeight.pop();
  windowHeight.push(window.innerHeight);
});

window.addEventListener('DOMContentLoaded', () => {
  scrollBtnChecking();
  const observer = new IntersectionObserver(handleScrollSpy, options);
  target.forEach((section) => {
    window.addEventListener('scroll', () => {});
    observer.observe(section);
  });

  windowWidth.push(window.innerWidth);
  windowHeight.push(window.innerHeight);

  scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
    });
  });
});

window.addEventListener('scroll', () => {
  scroll_Y_Pos = document.documentElement.scrollTop || document.body.scrollTop;
  scrollBtnChecking();
});
