const express = require('express');
const axios = require('axios');
const PostgreSQLService = require('./service/index');

const app = express();
const PORT = process.env.PORT || 5000;
const sqlService = new PostgreSQLService();

setInterval(async () => {
  const cities = await sqlService.fetchCities();

  cities.map(cityObject => refreshWeatherData(cityObject.city));
}, 2000);

const refreshWeatherData = async (city) => {
  try {
    const res = await axios.get(getWeatherApiPath(city));
    const { data: { name, dt, main: { temp, humidity }, wind: { speed } } } = res;
    if (name) {
      const cityWeather = { city: name, unixTime: dt, temp, windSpeed: speed, humidity };
      sqlService.persistCityWeather(cityWeather);
  
    }    
  } catch (err) {
    if (err.response.status === 404) {
      console.error(`City not found: ${city}`);
    } else {
      console.error(err);
    }
  }
}

const getWeatherApiPath = city => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=2f4b2d9ba014866e44984c9ae7f61fb8`;
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));