import React, { useState } from 'react'
import AddButton from './AddButton'
import InputField from './InputField'
import './AppHeader.css'
import apiService from '../api-service/index'

export default function AppHeader() {
  const [cityInput, setCityInput] = useState('');
  const handleAddCity = async () => {
    if (!cityInput) return;
    const res = await apiService.addCity(cityInput);
    const { data: { data: { addCity } } } = res;
    if ( addCity.includes('City not found')) {
      console.error(addCity)
    } else if ( !addCity ) {
      console.error('Oops! Something went wrong...')
    } else {
      console.log('setting')
      setCityInput('tere');
    }
  }

  return (
    <div className="AppHeader">
      <InputField emitValue={(value) => setCityInput(value)} />
      <AddButton emitConfirm={() => handleAddCity()} />
    </div>
  )
}