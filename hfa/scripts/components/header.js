import utils from "../utils.js";

class Header {
  constructor() {
    this.#registerEvents();
    this.#setCurrentPageClass();
  }
  #registerEvents() {
    utils.qs(".nav-toggle").addEventListener("click", this.#handleNavToggle);
  }
  #handleNavToggle() {
    utils.qs(".nav-container").classList.toggle('open');
  }
  #setCurrentPageClass() {
    const currentPage = utils.currentPage();
    const currentAnchor = utils
      .qs(`.large-nav a[href="${currentPage}"]`);
    if(currentAnchor)
      currentAnchor.classList.add("current-page");
  }
}

export default Header;
