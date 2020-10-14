import React from 'react'
import './AddButton.css'

export default function AddButton({ emitConfirm }) {
  const confirmAdd = () => {
    console.log('say hello')
  } 

  return (
    <button
      className="AddButton"
      onClick={() => emitConfirm()}
    >
      Add City
    </button>
  )
}
