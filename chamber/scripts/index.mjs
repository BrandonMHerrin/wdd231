import WeatherModule from "./Weather.mjs";
import MemberSpotlight from "./member-spotlight.mjs";

class IndexPage {
    constructor() {
        this.WeatherModule = new WeatherModule();
        this.WeatherModule.renderWeather();
        this.MemberSpotlight = new MemberSpotlight();
        this.MemberSpotlight.renderMemberSpotlight();
    }
}

new IndexPage();