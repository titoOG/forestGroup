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

const burgerBtn = document.getElementById('burgerBtn');
const burgerBtnMid = document.getElementById('burgerBtnMid');
const burgerBtnBot = document.getElementById('burgerBtnBot');
const navMobile = document.getElementById('navMobile');
const navDesktop = document.getElementById('navDesktop');
const footerInfo = document.getElementById('footerInfo');

burgerBtn.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  burgerBtnMid.classList.toggle('burgerActive');
  burgerBtnBot.classList.toggle('burgerActive');
});

const date = new Date();
console.log(date);
footerInfo.innerHTML = `&copy ${date.getFullYear()} Forest Group Company Ltd`;
