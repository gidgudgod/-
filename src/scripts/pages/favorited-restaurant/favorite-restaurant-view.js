import '../../components/restaurant-list';

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <main id="maincontent" tabindex="-1">
    <section class="content">
    <div class="restaurants">
      <h1 class="favorite-restaurant">Favorite Restaurant</h1>
      <restaurant-list></restaurant-list>
    </div>
    </section>
  </main>
   `;
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurants;

    restaurantListElement.dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantView;
