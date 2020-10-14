import React from 'react'
import './InputField.css'

export default function InputField({ emitValue, value }) {
  return (
    <input
      type="text"
      maxLength="100"
      spellCheck="false"
      onChange={(e) => emitValue(e.target.value)}
      value={value}
    />
  )
}
