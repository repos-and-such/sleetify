const express = require('express');
const axios = require('axios');
const sqlService = require('./service/index');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

setInterval(async () => {
  const cities = await sqlService.fetchCityNames();
  cities.map(cityObject => refreshWeatherData(cityObject.city));
}, 900000);

const refreshWeatherData = async (city) => {
  try {
    const res = await axios.get(getWeatherApiPath(city));
    const { data: { name, dt, main: { temp, humidity }, wind: { speed } } } = res;
    if (name) {
      const cityWeather = { city: name, unixTime: dt, temp, windSpeed: speed, humidity };
      sqlService.persistCityWeather(cityWeather);
      console.log(cityWeather);
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