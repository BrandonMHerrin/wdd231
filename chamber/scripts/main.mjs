import HeaderModule from "./header.mjs";
import FooterModule from "./footer.mjs";

class Page {
  constructor() {
    new HeaderModule();
    new FooterModule();
  }
}

new Page();