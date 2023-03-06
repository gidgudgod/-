const assert = require('assert');

Feature('Adding Customer Reviews');

Scenario('adding one customer review', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-card a');

  const firstRestaurant = locate('.restaurant-card a').first();

  I.click(firstRestaurant);

  I.seeElement('#input-name');
  I.seeElement('#input-review');

  const name = 'John Doe';
  const review = 'This restaurant is so good';

  I.fillField('input[id="input-name"]', name);
  I.fillField('textarea[id="input-review"]', review);

  I.seeElement('#btn-submit-review');

  I.click('#btn-submit-review');

  I.seeElement('customer-review');
  const latestCustomerName = locate('.customer-name').last();
  const latestCustomerReview = locate('.customer-text').last();
  const latestCustomerNameText = await I.grabTextFrom(latestCustomerName);
  const latestCustomerReviewText = await I.grabTextFrom(latestCustomerReview);

  assert.strictEqual(name, latestCustomerNameText);
  assert.strictEqual(review, latestCustomerReviewText);
});
