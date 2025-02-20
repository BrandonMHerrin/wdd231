import utils from "../utils.js";

class Footer {
    constructor() {
        this.setCurrentYear();
    }
    setCurrentYear() {
        const currentYear = new Date().getFullYear();
        utils.qs('.current-year').textContent = currentYear;
    }
}

export default Footer;