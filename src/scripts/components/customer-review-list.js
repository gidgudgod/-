import './customer-review';

class CustomerReviewList extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set customers(customers) {
    this._customers = customers;
    this.render();
  }

  render() {
    this.setAttribute('class', 'customer-review-list');
    this.innerHTML = '';
    if (!this._customers.length) {
      this.innerHTML = '<h2 class="message-info">No review yet.</h2>';
      return;
    }

    this._customers.forEach((customer) => {
      const cust = document.createElement('customer-review');
      cust.customer = customer;
      this.appendChild(cust);
    });
  }
}
customElements.define('customer-review-list', CustomerReviewList);
