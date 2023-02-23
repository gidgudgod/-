class CustomerReview extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set customer({
    date, name, review,
  }) {
    this._date = date;
    this._name = name;
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = ` <div class="customer-review">
    <div class="customer-review-header">
      <div class="customer-photo-wrapper">
        <img
          src="https://i.pravatar.cc/300"
          class="customer-photo"
          alt="${this._name}"
        />
      </div>
      <div>
        <p class="customer-name">${this._name}</p>
        <p class="customer-date">${this._date}</p>
      </div>
    </div>
    <p class="customer-text">
      ${this._review}
    </p>
  </div>`;
  }
}
customElements.define('customer-review', CustomerReview);
