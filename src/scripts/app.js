import NavbarInitiator from './utils/navbar-initiator';
import UrlParser from './routes/url-parser';
import routes from './routes/routes';
import AnnouncementInitiator from './utils/announcement-initiator';

class App {
  constructor({
    hamburgerMenu, navList, announcementCloseButton, announcement, content,
  }) {
    this._hamburgerMenu = hamburgerMenu;
    this._navList = navList;
    this._announcementCloseButton = announcementCloseButton;
    this._announcement = announcement;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavbarInitiator.init({
      hamburgerMenu: this._hamburgerMenu,
      navList: this._navList,
      content: this._content,
    });

    AnnouncementInitiator.init({
      announcementCloseButton: this._announcementCloseButton,
      announcement: this._announcement,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const loadingPageElement = document.getElementById('loading-page');
    loadingPageElement.style.display = 'block';
    this._content.innerHTML = await page.render();
    loadingPageElement.style.display = 'none';
    await page.afterRender();
    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
