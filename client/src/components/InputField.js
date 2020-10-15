import React from 'react'
import './InputField.css'

export default function InputField({ emitValue, emitEnter, value }) {
  return (
    <input
      type="text"
      maxLength="100"
      spellCheck="false"
      onKeyDown={(e) => {if (e.key === 'Enter') emitEnter()}}
      onChange={(e) => emitValue(e.target.value)}
      value={value}
    />
  )
}
