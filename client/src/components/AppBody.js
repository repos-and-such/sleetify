import React from 'react'
import './AppBody.css'
import CityWeather from './CityWeather'

export default function AppBody({ emitRemove, emitError, citiesWeather }) {
  return (
    <div className="AppBody">
      {citiesWeather.map(cityWeather => (
        <CityWeather
          key={cityWeather.id}
          cityWeather={cityWeather}
          emitRemove={(city) => emitRemove(city)}
          emitError={(errorMessage) => emitError(errorMessage)}
        />
      ))}
    </div>
  );
}


