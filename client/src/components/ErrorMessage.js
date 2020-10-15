import React from 'react'
import './ErrorMessage.css'

export default function ErrorMessage({ message }) {
  return (
    <div className="ErrorMessage">
      { message }
    </div>
  )
}
