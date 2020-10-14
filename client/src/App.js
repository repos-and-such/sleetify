import React, {useState, useEffect} from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import AppBody from './components/AppBody'
import apiService from './api-service/index'

function App() {
    
  const [citiesWeather, setCitiesWeather] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const res = await apiService.fetchCitiesWeather();
      setCitiesWeather(res.data.data.citiesWeather);
    })();
  }, []);

  const addCity = (cityObject) => {
    if (citiesWeather.some(existingCityObject => existingCityObject.city === cityObject.city)) return;
    setCitiesWeather([...citiesWeather, cityObject]);
  }

  const removeCity = (city) => {
    const filteredArray = citiesWeather.filter(cityObject => cityObject.city !== city);
    setCitiesWeather(filteredArray);
  }

  return (
    <div className="App">
      <AppHeader emitAdd={(cityObject) => addCity(cityObject)}/>
      <AppBody citiesWeather={citiesWeather} emitRemove={(city) => removeCity(city)} />
    </div>
  );
}

export default App;
