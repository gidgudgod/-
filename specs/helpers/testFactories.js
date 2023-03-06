import FavoriteButtonPresenter from '../../src/scripts/utils/favoriteButton-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({ favoriteButtonContainer: document.querySelector('#favoriteButton-container'), favoriteRestaurants: FavoriteRestaurantIdb, restaurant });
};

export { createFavoriteButtonPresenterWithRestaurant };
