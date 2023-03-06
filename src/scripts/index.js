import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/restaurant-detail.css';
import swRegister from './utils/sw-register';
import App from './app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Init App Shell
const app = new App({
  hamburgerMenu: document.querySelector('.hamburger-menu'),
  navList: document.querySelector('.nav-list'),
  announcementCloseButton: document.querySelector('.announcement-close'),
  announcement: document.querySelector('.announcement'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
