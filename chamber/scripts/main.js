import HeaderModule from "./header.js";
import FooterModule from "./footer.js";

class Page {
  constructor() {
    new HeaderModule();
    new FooterModule();
  }
}

new Page();