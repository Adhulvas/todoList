import React from 'react'
import './Button.css'

function Button({label,handleFunction}) {
  return (
    <button className='btn' onClick={handleFunction}>{label}</button>
  )
}

export default Button