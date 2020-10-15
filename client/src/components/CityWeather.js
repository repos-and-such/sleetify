import React from 'react'
import './CityWeather.css'
import moment from 'moment'
import RemoveButton from './RemoveButton'

export default function CityWeather({ cityWeather: { city, temperature, windspeed, humidity, unixtime }, emitRemove, emitError }) {
  return (
    <div className="CityWeather">
      <div className="CityHeader">
        <h1>{city}</h1>
        <RemoveButton 
          city={city} 
          emitRemove={(city) => emitRemove(city)}
          emitError={(errorMessage) => emitError(errorMessage)}
        />
      </div>
      <h2>Temp: {!temperature || temperature.toFixed(1)}°C</h2>
      <h2>Wind: {!windspeed || windspeed.toFixed(1)}m/s</h2>
      <h2>Humidity: {!humidity || humidity.toFixed(0)}%</h2>
      <h2>Last Updated: {moment.unix(unixtime).format("HH:mm")}</h2>
    </div>
  )
}
