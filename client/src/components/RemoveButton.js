import React from 'react'
import './RemoveButton.css'
import apiService from '../api-service/index'

export default function RemoveButton({ city, emitRemove }) {
  const handleRemove = () => {
    const res = apiService.removeCity(city);
    console.log(res)
    if (res) {
      window.location.reload(false);
    } 
    // emitRemove(city);
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
