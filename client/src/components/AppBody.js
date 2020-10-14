import React, { useEffect, useState } from 'react'
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

  const removeCity = (city) => {
    const filteredArray = citiesWeather.filter(cityObject => cityObject.city !== city);
    setCitiesWeather(filteredArray);
  } 

  return (
    <div className="AppBody">
      {citiesWeather.map(weather => (
        <CityWeather
          key={weather.id}
          cityWeather={weather}
          emitRemove={(city) => removeCity(city)}
        />
      ))}
    </div>
  );
}


