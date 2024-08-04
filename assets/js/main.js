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
import '../scss/_offersSection.scss';
import '../scss/_modal.scss';
import '../scss/_media.scss';

const pageID = document.querySelector('body');
const header = document.getElementById('header');
const burgerBtn = document.getElementById('burgerBtn');
const burgerBtnMid = document.getElementById('burgerBtnMid');
const burgerBtnBot = document.getElementById('burgerBtnBot');
const navMobile = document.getElementById('navMobile');
const navMobileLinks = document.querySelectorAll('.nav__mobile--link');
const navDesktopLinks = document.querySelectorAll('.nav__desktop--link');
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
const carouselModal = document.getElementById('carouselModal');
const carouselImages = document.querySelectorAll('.offers__box-item--img');
const carouselCurrentImage = document.getElementById('carouselCurrentImage');

// globals

let scroll_Y_Position;
let elementRatio = [];
let targetID;
let activeLink;
let lastActiveLink;
let carouselImageSrc = [];
let carouselImageGroup = [];
let carouselImageID = 0;
let windowWidth = [];
let windowHeight = [];

const carouselGroupChecking = () => {
  if (carouselImageGroup == 'carouselDemoGroup') {
    carouselImageSrc[0] = `./assets/img/offersDemo_HD_${carouselImageID}.jpg`;
  } else if (carouselImageGroup == 'carouselStandGroup') {
    carouselImageSrc[0] = `./assets/img/offersStand_HD_${carouselImageID}.jpg`;
  } else if (carouselImageGroup == 'carouselPremGroup') {
    carouselImageSrc[0] = `./assets/img/offersPrem_HD_${carouselImageID}.jpg`;
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
  carouselModal.classList.add('dflex');
  carouselModal.classList.add('carouselImagesIn');
};

const closeCarousel = () => {
  carouselImageSrc.length = 0;
  carouselImageGroup.length = 0;
  carouselImageID = 0;
  carouselCurrentImage.src = '';
  pageID.classList.remove('noScroll');
  shadowBox.classList.remove('box-shadow');
  carouselModal.classList.remove('dflex');
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
    windowHeight.pop();
    windowWidth.push(window.innerWidth);
    windowHeight.push(window.innerHeight);
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
  // console.log(headerOffsetTop);
  scroll_Y_Position =
    document.documentElement.scrollTop || document.body.scrollTop;
  // console.log(scroll_Y_Position);
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

window.addEventListener('DOMContentLoaded', () => {
  windowWidth.push(window.innerWidth);
});

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
  // threshold: [0.3, 0.5, 0.83, 1],
  // threshold: [0.97, 1],
  // rootMargin: '0px 0px -396px ',
  rootMargin: '0px 0px -55% ',
};

const target = document.querySelectorAll('.spy');

const handleScrollSpy = (entries) => {
  entries.forEach((entry) => {
    // console.log(windowWidth);
    elementRatio.pop();
    targetID = entry.target.id;
    elementRatio.push(entry.intersectionRatio.toFixed(3));
    // console.log(`${targetID}`, elementRatio);
    const maxValue = Math.max(...elementRatio);
    activeLink = document.querySelector(
      `.nav__desktop--link[href='#${targetID}']`
    );

    if (!entry.isIntersecting) {
      // console.log(activeLink);
      // lastActiveLink.classList.add('navActive');
      return;
    } else if (entry.isIntersecting) {
      navDesktopLinks.forEach((link) => link.classList.remove('navActive'));
      activeLink.classList.add('navActive');
    } else if (entry.isIntersecting && pageID.id == 'offersPage') {
      console.log(`${targetID}`, entry.intersectionRatio);
      activeLink = document.querySelector(
        `.nav__desktop--link[href='#${targetID}']`
      );
      navDesktopLinks.forEach((link) => link.classList.remove('navActive'));
      activeLink.classList.add('navActive');
    }
  });
};

const observer = new IntersectionObserver(handleScrollSpy, options);

target.forEach((section) => {
  observer.observe(section);
});
