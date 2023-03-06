import FavoriteRestaurantView from '../src/scripts/pages/favorited-restaurant/favorite-restaurant-view';
import FavoriteRestaurantPresenter from '../src/scripts/pages/favorited-restaurant/favorite-restaurant-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.message-info').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurant.and.returnValues([]);

      new FavoriteRestaurantPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.querySelector('restaurant-list').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurant.and.returnValues([
        {
          id: 69, name: 'A', pictureId: 3, description: 'Resutoran A',
        },
        {
          id: 96, name: 'B', pictureId: 4, description: 'Resutoran B',
        },
      ]);

      new FavoriteRestaurantPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
