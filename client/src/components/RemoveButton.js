import React from 'react'
import './RemoveButton.css'
import apiService from '../api-service/index'

export default function RemoveButton({ city, emitRemove }) {
  return (
    <button 
      onClick={() => emitRemove(city)}
      onClick={() => apiService.removeCity(city)}
      className="RemoveButton"
    >
      Remove
    </button>
    )
}
