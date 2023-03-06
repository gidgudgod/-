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
    <i class="${this._isFavorite ? 'ph-heart-straight-fill' : 'ph-heart-straight'} ph-2x" aria-hidden="true"></i>
  </button>`;
  }
}
customElements.define('favorite-button', FavoriteButton);
