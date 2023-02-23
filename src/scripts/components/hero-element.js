class Hero extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    this.innerHTML = `
    <div class="hero-section">
    <img
      src="./images/heros/hero-image_2.jpg"
      class="hero-image"
      alt="hero image"
    />
    <p class="hero-title">Best Japanese Restaurants in Town.</p>
    </div>
    `;
  }
}
customElements.define('hero-element', Hero);
