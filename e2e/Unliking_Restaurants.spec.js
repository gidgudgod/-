const assert = require('assert');

Feature('Unliking Restaurants');

Before(async ({ I }) => {
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

Scenario('showing one liked restaurant', async ({ I }) => {
  I.seeElement('.restaurant-card');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.restaurant-card a');

  const firstRestaurant = locate('.restaurant-card a').first();
  I.click(firstRestaurant);

  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');
  I.see('Restaurants not found', '.message-info');
});
