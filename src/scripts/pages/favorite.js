import '../components/restaurant-list';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <main id="maincontent">
        <section class="content">
        <div class="restaurants">
          <h1 class="favorite-restaurant">Favorite Restaurant</h1>
          <restaurant-list></restaurant-list>
        </div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    try {
      const loadingElement = "<div class='loader' style='margin: 20% auto;'></div>";
      restaurantListElement.innerHTML = loadingElement;
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      restaurantListElement.restaurants = restaurants;
    } catch (error) {
      console.error(error);
      const errorElement = "<div class='error-request-text'>Failed to Get Data</div>";
      restaurantListElement.innerHTML = errorElement;
    }
  },
};

export default Favorite;
