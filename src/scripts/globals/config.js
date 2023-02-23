const BASE_IMAGE_URL = 'https://restaurant-api.dicoding.dev/images/';

const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  IMAGE_URL: {
    SMALL: `${BASE_IMAGE_URL}small/`,
    MEDIUM: `${BASE_IMAGE_URL}medium/`,
    LARGE: `${BASE_IMAGE_URL}large/`,
  },
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'resutoran-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
