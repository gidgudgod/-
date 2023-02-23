import './restaurant-item';

class RestaurantList extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render(restaurants);
  }

  // eslint-disable-next-line class-methods-use-this
  render(restaurants) {
    this.setAttribute('class', 'restaurant-list');

    this.innerHTML = '';
    if (!restaurants.length) {
      this.innerHTML = '<h2 class="message-info">Restaurants not found.</h2>';
      return;
    }

    restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.restaurant = restaurant;

      this.appendChild(restaurantElement);
    });
  }
}
customElements.define('restaurant-list', RestaurantList);
