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
    this.innerHTML = `<div class="restaurant-detail-container" id="maincontent" tabindex="-1">
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
            ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#d6cbca" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59.4-4.1-22-55.5A16.4,16.4,0,0,0,128,16h0a16.4,16.4,0,0,0-15.2,10.4L90.4,82.2,31.4,86A16.5,16.5,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.4,38.4L53.9,207a18.5,18.5,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.5,16.5,0,0,0,15.8-20.8l-14.3-58.1L234,115.5A16.8,16.8,0,0,0,239.2,97.4Z"></path></svg>
            <span>${this._rating}</span>
          </span>
        </div>
        <div class="restaurant-location">
          <p class="restaurant-address">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#d6cbca" viewBox="0 0 256 256" style="margin-top: 3px"><rect width="256" height="256" fill="none"></rect><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.2,83.4,134.6a8.3,8.3,0,0,0,9.2,0C136,236.2,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path></svg>
            <span
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
