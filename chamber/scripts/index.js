import WeatherModule from "./weather.js";
import MemberSpotlight from "./member-spotlight.js";

class IndexPage {
    constructor() {
        this.WeatherModule = new WeatherModule();
        this.WeatherModule.renderWeather();
        this.MemberSpotlight = new MemberSpotlight();
        this.MemberSpotlight.renderMemberSpotlight();
    }
}

new IndexPage();