import React, { useState } from 'react'
import AddButton from './AddButton'
import InputField from './InputField'
import './AppHeader.css'
import apiService from '../api-service/index'

export default function AppHeader({ emitAdd, emitError }) {

  const [cityInput, setCityInput] = useState('');

  const handleAddCity = async () => {
    if (!cityInput) return;

    const res = await apiService.addCity(cityInput);

    const { status, data: { errors } } = res;
    if (status !== 200 || errors) {
      emitError('An error occurred while adding City');
      return;
    }

    const { data: { data: { addCity, addCity: { city } } } }  = res;
    if (city.includes('ERROR:')) {
      emitError(city);
    } else {
      setCityInput('');
      emitAdd(addCity);
    }
  }

  return (
    <div className="AppHeader">
      <InputField 
        value={cityInput}
        emitValue={(value) => setCityInput(value)} 
      />
      <AddButton emitConfirm={() => handleAddCity()} />
    </div>
  )
}