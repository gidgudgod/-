import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurantSource {
  static async restaurants() {
    const { data } = await axios.get(API_ENDPOINT.RESTAURANTS);
    return data.restaurants;
  }

  static async detailRestaurant(id) {
    const { data } = await axios.get(API_ENDPOINT.DETAIL(id));
    return data.restaurant;
  }

  static async searchRestaurant(query) {
    const { data } = await axios.get(API_ENDPOINT.SEARCH(query));
    return data.restaurants;
  }

  static async addReview({ id, name, review }) {
    const { data } = await axios.post(API_ENDPOINT.ADD_REVIEW, { id, name, review }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return data.customerReviews;
  }
}

export default DicodingRestaurantSource;
