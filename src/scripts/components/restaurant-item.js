import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set restaurant({
    id, name, description, pictureId, city, rating,
  }) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._pictureId = pictureId;
    this._city = city;
    this._rating = rating;
    this.render();
  }

  render() {
    this.innerHTML = `<article class="restaurant" id="${this._id}">
    <div class="restaurant-card">
      <a href="/#/detail/${this._id}" class="restaurant-photo-wrapper">
        <img
          src="${CONFIG.IMAGE_URL.LARGE + this._pictureId}"
          class="restaurant-photo"
          alt="${this._name}"
        />
      </a>
      <h2 class="restaurant-name">${this._name}</h2>
      <p class="restaurant-info">
        <span>📍 ${this._city}</span> - <span>${this._rating} ⭐️</span>
      </p>
      <p class="restaurant-description">
        ${this._description}
      </p>
    </div>
    </article>`;
  }
}
customElements.define('restaurant-item', RestaurantItem);
