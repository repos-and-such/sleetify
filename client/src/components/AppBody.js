import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AppBody.css'
import CityWeather from './CityWeather';

export default function AppBody() {
  const fetchUrl = '/graphql?query={cityWeather{id,city,temperature,windspeed,humidity,unixtime}}' 
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const res = await axios.get(fetchUrl);
      setCityWeather(res.data.data.cityWeather);
    })();
  }, []);

  return (
    <div className="AppBody">
      {cityWeather.map(weather => (
        <CityWeather 
          key={weather.id}
          cityWeather={weather}
        />
      ))}
    </div>
  );
}


