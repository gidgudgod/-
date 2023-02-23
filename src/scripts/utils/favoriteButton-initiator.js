import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import '../components/favorite-button';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    const favoriteButtonElement = document.createElement('favorite-button');
    favoriteButtonElement.isFavorite = false;

    this._favoriteButtonContainer.innerHTML = '';
    this._favoriteButtonContainer.appendChild(favoriteButtonElement);

    const favoriteButton = document.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    const favoriteButtonElement = document.createElement('favorite-button');
    favoriteButtonElement.isFavorite = true;
    this._favoriteButtonContainer.innerHTML = '';
    this._favoriteButtonContainer.appendChild(favoriteButtonElement);

    const favoriteButton = document.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
