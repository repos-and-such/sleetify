const axios = require('axios');
const sqlService = require('./sql');

class CitiesService {
  async refreshAllCities() {
    const cities = await sqlService.fetchCityNames();
    cities.map(cityObject => this.refreshCity(cityObject.city));
    setInterval(() => {
      cities.map(cityObject => this.refreshCity(cityObject.city));
    }, 900000);
  }
    
  async refreshCity(city) {
    try {
      const res = await axios.get(this.getWeatherApiPath(city));
      const { data: { name, dt, main: { temp, humidity }, wind: { speed } } } = res;
      if (name) {
        const cityWeather = { city: name, unixTime: dt, temp, windSpeed: speed, humidity };
        return await sqlService.persistCityWeather(cityWeather);
      }    
    } catch (err) {
      console.log(err)
      if (err.response && err.response.status === 404) {
        console.error(`City not found: ${city}`);
        return `City not found: ${city}`;
      } else {
        console.error(err);
      }
    }
  }
  
  getWeatherApiPath(city) {
    return encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=2f4b2d9ba014866e44984c9ae7f61fb8`);
  }
}

module.exports = new CitiesService();