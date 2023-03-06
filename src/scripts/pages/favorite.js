import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import FavoriteRestaurantView from './favorited-restaurant/favorite-restaurant-view';
import FavoriteRestaurantPresenter from './favorited-restaurant/favorite-restaurant-presenter';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
