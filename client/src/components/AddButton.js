import React from 'react'
import './AddButton.css'

export default function AddButton({ emitConfirm }) {
  return (
    <button
      className="AddButton"
      onClick={() => emitConfirm()}
    >
      Add City
    </button>
  )
}
