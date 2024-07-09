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

const burgerBtn = document.getElementById('burgerBtn');
const navMobile = document.getElementById('navMobile');
const navDesktop = document.getElementById('navDesktop');

burgerBtn.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  //   console.log('essa');
});
