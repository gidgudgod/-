const AnnouncementInitiator = {
  init({ announcementCloseButton, announcement }) {
    announcementCloseButton.addEventListener('click', (event) => {
      this._closeAnnouncement(event, announcement);
    });
  },

  _closeAnnouncement(event, announcement) {
    event.stopPropagation();
    announcement.classList.toggle('hide');
  },
};

export default AnnouncementInitiator;
