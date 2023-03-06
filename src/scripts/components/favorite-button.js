class FavoriteButton extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set isFavorite(isFavorite) {
    this._isFavorite = isFavorite;
    this.render();
  }

  render() {
    this.innerHTML = `<button
    aria-label="${!this._isFavorite ? 'favorite this restaurant' : 'unfavorite this restaurant'}"
    type="button"
    class="favorite-button"
  >
    ${this._isFavorite ? ' <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1eb854" viewBox="0 0 256 256" aria-hidden="true"><rect width="256" height="256" fill="none"></rect><path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"></path></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1eb854" viewBox="0 0 256 256" aria-hidden="true"><rect width="256" height="256" fill="none"></rect><path d="M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z" fill="none" stroke="#4fa244" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>'}   
  </button>`;
  }
}
customElements.define('favorite-button', FavoriteButton);
