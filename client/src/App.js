import React, {useState, useEffect} from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import AppBody from './components/AppBody'
import ErrorMessage from './components/ErrorMessage'
import apiService from './api-service/index'

function App() {
    
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [activeError, setActiveError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('An error occurred');

  useEffect(() => {
    (async function fetchData() {
      const { data: { errors }, data: { data: { citiesWeather } } } = await apiService.fetchCitiesWeather();
      if (errors || !Array.isArray(citiesWeather)) {
        showError('An error occurred while fetching data');
      } else {
        setCitiesWeather(citiesWeather);
      }
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

  const showError = (errorMessage) => {
    setErrorMessage(errorMessage);
    setActiveError(true);
    setTimeout(() => {
      setActiveError(false);
    }, 2000);
  }

  return (
    <div className="App">
      { !activeError || <ErrorMessage message={errorMessage}/>}
      <AppHeader 
        emitAdd={(cityObject) => addCity(cityObject)} 
        emitError={(errorMessage) => showError(errorMessage)}
      />
      <AppBody 
        citiesWeather={citiesWeather} 
        emitRemove={(city) => removeCity(city)}
        emitError={(errorMessage) => showError(errorMessage)}
      />
    </div>
  );
}

export default App;
