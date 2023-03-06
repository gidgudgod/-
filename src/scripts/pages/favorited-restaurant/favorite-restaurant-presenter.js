import '../../components/restaurant-list';
import { createSkeletonRestaurantList } from '../../utils/skeleton-restaurant-item-template';

class FavoriteRestaurantPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurantListElement = document.querySelector('restaurant-list');

    try {
      const loadingElement = createSkeletonRestaurantList();
      restaurantListElement.innerHTML = loadingElement;
      const restaurants = await this._favoriteRestaurants.getAllRestaurant();
      this._displayRestaurants(restaurants);
    } catch (error) {
      console.error(error);
      const errorElement = "<div class='error-request-text'>Failed to Get Data</div>";
      restaurantListElement.innerHTML = errorElement;
    }
  }

  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestaurantPresenter;
