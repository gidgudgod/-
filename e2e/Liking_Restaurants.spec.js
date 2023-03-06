const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Restaurants not found', '.message-info');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.see('Restaurants not found', '.message-info');

  I.amOnPage('/');

  I.seeElement('.restaurant-card a');

  const firstRestaurant = locate('.restaurant-card a').first();
  const firstRestaurantName = locate('.restaurant-name').first();
  const firstRestaurantNameText = await I.grabTextFrom(firstRestaurantName);
  I.click(firstRestaurant);

  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const likedRestaurantNameText = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantNameText, likedRestaurantNameText);
});
