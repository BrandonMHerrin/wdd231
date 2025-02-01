import utils from "./utils.mjs";

class FooterModule {
    constructor() {
        this.currentYear = new Date().getFullYear();
        this.currentYearSpan = utils.qs('.current-year');
        this.lastModificationSpan = utils.qs('#last-modification');
        this.setCurrentYear();
        this.setLastModificaton();
    }
    setCurrentYear() {
        this.currentYearSpan.textContent = this.currentYear;
    }
    setLastModificaton() {
        this.lastModificationSpan.textContent = document.lastModified;
    }
}

export default FooterModule;