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
let navDesktopLinks = document.querySelectorAll(`.nav__desktop--link`);
const footerInfo = document.getElementById('footerInfo');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const of_btns = document.querySelectorAll('.offers__selector-btns a');
const of_soloBtn = document.getElementById('solo');
const of_groupBtn = document.getElementById('group');

const offersBtnToggle = (e) => {
  if (!e.target.classList.contains('cta') && e.target === of_soloBtn) {
    of_soloBtn.classList.add('cta');
    of_groupBtn.classList.remove('cta');
  } else if (e.target.classList.contains('cta') && e.target === of_soloBtn) {
    of_soloBtn.classList.remove('cta');
    of_groupBtn.classList.add('cta');
  }

  if (!e.target.classList.contains('cta') && e.target === of_groupBtn) {
    of_groupBtn.classList.add('cta');
    of_soloBtn.classList.remove('cta');
  } else if (e.target.classList.contains('cta') && e.target === of_groupBtn) {
    of_groupBtn.classList.remove('cta');
    of_soloBtn.classList.add('cta');
  }
};

of_soloBtn.addEventListener('click', offersBtnToggle);

of_btns.forEach((btn) => {
  btn.addEventListener('click', offersBtnToggle);
});

const target = document.querySelectorAll('.spy');

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

setInterval(() => {
  scroll_Y_Position =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll_Y_Position > 500) {
    scrollToTopBtn.classList.add('btnFadeIn');
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
