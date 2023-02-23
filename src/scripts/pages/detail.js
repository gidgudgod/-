import DicodingRestaurantSource from '../data/dicodingRestaurant-source';
import '../components/restaurant-list';
import '../components/restaurant-detail';
import UrlParser from '../routes/url-parser';
import FavoriteButtonInitiator from '../utils/favoriteButton-initiator';

const Detail = {
  async render() {
    return `
      <restaurant-detail></restaurant-detail>
    `;
  },

  async afterRender() {
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    try {
      const loadingElement = "<div class='loader' style='margin: 20% auto;'></div>";
      restaurantDetailElement.innerHTML = loadingElement;
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
      restaurantDetailElement.restaurant = restaurant;

      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButton-container'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId,
        },
      });
    } catch (error) {
      console.error(error);
      const errorElement = "<div class='error-request-text'>Failed to Get Data</div>";
      restaurantDetailElement.innerHTML = errorElement;
    }
  },
};

export default Detail;
