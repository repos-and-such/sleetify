import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const fetchUrl = '/graphql?query={cityWeather{id,city,temperature,windspeed,humidity,unixtime}}' 
  const [cityWeather, setCityWeather] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      const res = await axios.get(fetchUrl);
      setCityWeather(res.data.data.cityWeather);
    })();
  }, []);
  return (
    <div className="App">
      {cityWeather.map(weather => (
        <ul key={weather.id}>
          <li>City: {weather.city}</li>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Wind: {weather.windspeed}m/s</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Time: {weather.unixtime}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
