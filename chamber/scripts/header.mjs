import utils from './utils.mjs';

class HeaderModule {
    constructor() {
        this.menuToggle = utils.qs('#menu-toggle');
        this.navContainer = utils.qs('header .nav-container');
        this.setToggleEventListener();
    }
    setToggleEventListener() {
        this.menuToggle.addEventListener('click', this.handleToggleClick);
    }
    handleToggleClick() {
        const navContainer = utils.qs("header .nav-container");
        navContainer.classList.toggle('open');
    }
}

export default HeaderModule;