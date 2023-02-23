import DicodingRestaurantSource from '../data/dicodingRestaurant-source';
import CONFIG from '../globals/config';
import './customer-review-list';

class RestaurantDetail extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set restaurant({
    id, name, description, pictureId, city, rating, address, menus, customerReviews,
  }) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._pictureId = pictureId;
    this._city = city;
    this._rating = rating;
    this._address = address;
    this._menus = menus;
    this._customerReviews = customerReviews;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="restaurant-detail-container" id="maincontent">
    <img
      class="restaurant-header-background image-blurred-edge"
      src="${CONFIG.IMAGE_URL.LARGE + this._pictureId}"
      alt="${this._name}"
    />
    <header class="restaurant-detail-header-desc">
      <h1 class="restaurant-detail-title">
        ${this._name}
      </h1>
      <div id="favoriteButton-container">
      </div>
    </header>
    <div class="restaurant-detail-main">
      <div class="restaurant-detail-header">
        <div class="restaurant-detail-photo-wrapper">
          <img
            class="restaurant-detail-photo"
            src="${CONFIG.IMAGE_URL.LARGE + this._pictureId}"
            alt="${this._name}"
          />
          <span class="restaurant-detail-rating" aria-label="rating"
            ><i class="ph-star-fill"></i><span>${this._rating}</span></span
          >
        </div>
        <div class="restaurant-location">
          <p class="restaurant-address">
            <i class="ph-map-pin-fill" style="margin-top: 3px"></i
            ><span
              >${this._address}
            </span>
          </p>
          <p>Kota&nbsp;<span>${this._city}</span></p>
        </div>
      </div>
      <article class="restaurant-detail-body">
        <section id="restaurant-basic-info" class="section">
          <div class="restaurant-detail-description">
            <h2>Description</h2>
            <p>
              ${this._description}
            </p>
          </div>
        </section>
        <section id="restaurant-menu" class="section">
          <h2>Menu</h2>
          <div class="restaurant-menu-wrapper">
            <section id="restaurant-food">
              <h3>Food</h3>
              <ol>
              ${this._menus.foods.map((food) => (`<li>${food.name}</li>`)).join('')}
              </ol>
            </section>
            <section id="restaurant-drink">
              <h3>Drink</h3>
              <ol>
              ${this._menus.drinks.map((drink) => (`<li>${drink.name}</li>`)).join('')}
              </ol>
            </section>
          </div>
        </section>
        <section id="restaurant-customer-reviews" class="section">
          <h2>Reviews</h2>
          <form id="form-add-customer-review">
          <div class="form-input-group">
          <label for="input-name">Name</label>
          <input type="text" id="input-name" class="input-text">
          </div>
          <div class="form-input-group">
          <label for="input-review">Tell us about your experience here</label>
          <textarea type="text" id="input-review" class="input-text textarea"></textarea>
          </div>
          <button type="submit" name="submit" id="btn-submit-review">Submit</submit>
          </form>
          
        </section>
      </article>
    </div>
  </div>`;
    const customerReviewListElement = document.createElement('customer-review-list');
    customerReviewListElement.customers = this._customerReviews;
    const customerReviewsContainer = document.querySelector('#restaurant-customer-reviews');
    customerReviewsContainer.appendChild(customerReviewListElement);

    const formAddReviewElement = document.querySelector('#form-add-customer-review');
    formAddReviewElement.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const inputNameElement = document.querySelector('#input-name');
      const inputReviewElement = document.querySelector('#input-review');
      const addedReviewResult = await DicodingRestaurantSource.addReview({
        id: this._id,
        name: inputNameElement.value,
        review: inputReviewElement.value,
      });
      customerReviewListElement.customers = addedReviewResult;
    });
  }
}
customElements.define('restaurant-detail', RestaurantDetail);
