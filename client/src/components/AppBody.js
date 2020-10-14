import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AppBody.css'
import CityWeather from './CityWeather'
import apiService from '../api-service/index'


export default function AppBody() {
  
  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const res = await apiService.fetchCitiesWeather();
      setCitiesWeather(res.data.data.citiesWeather);
    })();
  }, []);

  return (
    <div className="AppBody">
      {citiesWeather.map(weather => (
        <CityWeather
          key={weather.id}
          cityWeather={weather}
          emitRemove={(city) => console.log(city)}
        />
      ))}
    </div>
  );
}


