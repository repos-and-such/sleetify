import React from 'react'
import './RemoveButton.css'
import apiService from '../api-service/index'

export default function RemoveButton({ city, emitRemove, emitError }) {

  const handleRemove = async () => {
    const { status, data: { data: { removeCity } } } = await apiService.removeCity(city);
    if (status !== 200 || removeCity === 'DATABASE_ERROR') {
      emitError('An error occurred while removing City'); 
      return;
    };
    emitRemove(removeCity);
  } 

  return (
    <button 
      onClick={() => handleRemove()}
      className="RemoveButton"
    >
      Remove
    </button>
    )
}
