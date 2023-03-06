import DicodingRestaurantSource from '../data/dicodingRestaurant-source';
import '../components/restaurant-list';
import { createSkeletonRestaurantList } from '../utils/skeleton-restaurant-item-template';

const Restaurant = {
  async render() {
    return `
      <main id="maincontent" tabindex="-1">
        <section class="content">
        <div class="restaurants">
          <restaurant-list></restaurant-list>
        </div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    try {
      const loadingElement = createSkeletonRestaurantList();
      restaurantListElement.innerHTML = loadingElement;
      const restaurants = await DicodingRestaurantSource.restaurants();
      restaurantListElement.restaurants = restaurants;
    } catch (error) {
      console.error(error);
      const errorElement = "<div class='error-request-text'>Failed to Get Data</div>";
      restaurantListElement.innerHTML = errorElement;
    }
  },
};

export default Restaurant;
