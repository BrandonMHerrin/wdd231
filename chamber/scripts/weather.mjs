import utils from "./utils.mjs";

class WeatherModule {
  constructor() {
    this.baseUrl =
      "https://api.openweathermap.org/data/2.5/";
  }
  async renderWeather() {
    try {
      await this.updateCurrentWeatherCard();
      await this.updateForecastCard();
    } catch (error) {
      console.error(error);
    }
  }
  async updateCurrentWeatherCard() {
    const currentWeather = await this.loadCurrentWeather();
    utils.qs('.weather .temp').textContent = currentWeather.current;
    utils.qs('.weather .conditions').textContent = currentWeather.description;
  }
  async updateForecastCard() {
    const forecasts = await this.loadForcast();
    this.updateForecastDates(forecasts);
  }
  updateForecastDates(forecasts) {
    const todaysForecast = forecasts[0];
    const tomorrowsForecast = forecasts[1];
    const dayAfterForecast = forecasts[2];
    utils.qs('.today .temp').textContent = todaysForecast.high;
    utils.qs('.tomorrow .forecast-date').textContent = tomorrowsForecast.date;
    utils.qs('.tomorrow .temp').textContent = tomorrowsForecast.high;
    utils.qs('.day-after .forecast-date').textContent = dayAfterForecast.date;
    utils.qs('.day-after .temp').textContent = dayAfterForecast.high;
  } 
  async loadCurrentWeather() {
    const url =
      this.baseUrl +
      "weather?lat=38.9545&lon=-111.8576&appid=e4aaa1489903c534b7a331381302a6b6&units=imperial";
    const response = await fetch(url);
    const data = await response.json();
    return this.parseCurrentWeather(data);
  }
  parseCurrentWeather(data) {
    const currentWeather = {};
    currentWeather.current = Math.round(data.main.temp);
    currentWeather.title = data.weather[0].main;
    currentWeather.description = data.weather[0].description;
    currentWeather.icon = data.weather[0].icon;
    return currentWeather;
  }
  async loadForcast() {
    const url =
      this.baseUrl +
      `forecast?lat=38.9545&lon=-111.8576&appid=e4aaa1489903c534b7a331381302a6b6&units=imperial`;
    const response = await fetch(url);
    const data = await response.json();
    return this.parseForecast(data.list);
  }

  parseForecast(data) {
    const forecasts = {};
    data.forEach((forecast) => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toISOString().split('T')[0];

        if (!forecasts[day]) {
            forecasts[day] = {
                date: utils.dateMapper(new Date(day).getDay()),
                high: Math.round(forecast.main.temp)
            };
        } else {
            const temp = forecast.main.temp;
            if(forecasts[day].high < temp) {
                forecasts[day].high = Math.round(temp);
            }
        }
    });
    return Object.values(forecasts).slice(0,3);
  }
}

export default WeatherModule;
