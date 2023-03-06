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
    <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg" class="hero-image" alt="hero image">
      <source type="image/webp" srcset="./images/heros/hero-image_2.webp" class="hero-image" alt="hero image">
      <source type="image/jpeg" srcset="./images/heros/hero-image_2-large.jpg" class="hero-image" alt="hero image">
      <img src="./images/heros/hero-image_2-large.jpg"
      class="hero-image"
      alt="hero image">
    </picture>
    <p class="hero-title">Best Japanese Restaurants in Town.</p>
    </div>
    `;
  }
}
customElements.define('hero-element', Hero);
