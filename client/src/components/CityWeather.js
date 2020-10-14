import React from 'react';
import './CityWeather.css';
import moment from 'moment';


export default function CityWeather({ cityWeather: { city, temperature, windspeed, humidity, unixtime } }) {
  
  return (
    <div className="CityWeather">
      <h1>{city}</h1>
      <h2>Temp: {temperature}°C</h2>
      <h2>Wind: {windspeed}m/s</h2>
      <h2>Humidity: {humidity}%</h2>
      <h2>Last Updated: {moment.unix(unixtime).format("HH:mm")}</h2>
    </div>
  )
}
