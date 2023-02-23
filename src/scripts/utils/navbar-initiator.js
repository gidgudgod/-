const NavbarInitiator = {
  init({ hamburgerMenu, navList, content }) {
    hamburgerMenu.addEventListener('click', (event) => {
      this._toggleNavList(event, navList);
    });

    content.addEventListener('click', (event) => {
      this._closeNavList(event, navList);
    });
  },

  _toggleNavList(event, navList) {
    event.stopPropagation();
    navList.classList.toggle('show');
  },

  _closeNavList(event, navList) {
    event.stopPropagation();
    navList.classList.remove('show');
  },
};

export default NavbarInitiator;
