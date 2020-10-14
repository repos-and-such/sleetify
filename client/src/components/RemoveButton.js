import React from 'react'
import './RemoveButton.css'
import apiService from '../api-service/index'

export default function RemoveButton({ city, emitRemove }) {
  const handleRemove = async () => {
    const res = await apiService.removeCity(city);
    if (res.status === 200) {
      emitRemove(city);
    } else {
      console.error('Oops! Something went wrong...')
    }
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
