import React, { useState } from 'react'
import AddButton from './AddButton'
import InputField from './InputField'
import './AppHeader.css'
import apiService from '../api-service/index'

export default function AppHeader({ emitAdd }) {
  const [cityInput, setCityInput] = useState('');
  const handleAddCity = async () => {
    if (!cityInput) return;
    const res = await apiService.addCity(cityInput);
    const { data: { data: { addCity } } } = res;
    if ( addCity.includes('City not found')) {
      console.error(addCity)
    } else if (!res.data) {
      console.error('Oops! Something went wrong...')
    } else {
      setCityInput('');
      window.location.reload(false);
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