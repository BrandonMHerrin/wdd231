import HeaderModule from "./header.mjs";
import FooterModule from "./Footer.mjs";

class Page {
  constructor() {
    new HeaderModule();
    new FooterModule();
  }
}

new Page();