const express = require('express')
const axios = require('axios')
const executePostgreSQL = require('./service/index')

const app = express();
const PORT = process.env.PORT || 5000;

setInterval(async () => {
  const cities = await executePostgreSQL('select city from city_weather');
  console.log(cities)
  cities.map(cityObject => getWeatherData(cityObject.city));
}, 4000);

const getWeatherData = async (city) => {
  try {
    const { data: { name, dt, main: { temp, humidity }, wind: { speed } } } = await axios.get(getWeatherApiPath(city));
    const cityWeatherData = { city: name, unixTime: dt, temp, windSpeed: speed, humidity };

    console.log(cityWeatherData);
    
  } catch (err) {
    console.log(err)
  }
}

const getWeatherApiPath = city => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=2f4b2d9ba014866e44984c9ae7f61fb8`;
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));