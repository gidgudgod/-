import DicodingRestaurantSource from '../data/dicodingRestaurant-source';
import '../components/hero-element';
import '../components/restaurant-list';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <main id="maincontent" tabindex="-1">
        <section class="content">
        <div class="restaurants">
          <h1 class="hottest-restaurant">Hottest Restaurant</h1>
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
      const restaurants = await DicodingRestaurantSource.restaurants();
      restaurantListElement.restaurants = restaurants;
    } catch (error) {
      console.error(error);
      const errorElement = "<div class='error-request-text'>Failed to Get Data</div>";
      restaurantListElement.innerHTML = errorElement;
    }
  },
};

export default Home;
