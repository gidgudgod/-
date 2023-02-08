import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

console.log('Hello Coders! :)');

const announcementCloseButton = document.querySelector('.announcement-close');
const announcement = document.querySelector('.announcement');
const navList = document.querySelector('.nav-list');
const restaurantList = document.querySelector('.restaurant-list');

announcementCloseButton.addEventListener('click', (e) => {
  e.stopPropagation();
  announcement.classList.toggle('hide');
});

document.querySelector('.hamburger-menu').addEventListener('click', (e) => {
  e.stopPropagation();
  navList.classList.toggle('show');
});

const restaurants = data.restaurants
  .map(
    (r) => `<article class="restaurant" id="${r.id}">
<div class="restaurant-card">
  <div class="restaurant-photo-wrapper">
    <img
      src="${r.pictureId}"
      class="restaurant-photo"
      alt="${r.name}"
    />
  </div>
  <h2 class="restaurant-name">${r.name}</h2>
  <p class="restaurant-info">
    <span>📍 ${r.city}</span> - <span>${r.rating} ⭐️</span>
  </p>
  <p class="restaurant-description">
    ${r.description}
  </p>
</div>
</article>`
  )
  .join('');

restaurantList.innerHTML = restaurants;
