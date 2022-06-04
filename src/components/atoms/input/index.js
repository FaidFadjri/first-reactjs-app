import React from 'react'
import './input.scss';

const Input = ({label, ...rest}) => {
  return (
      <div className='form-group'>
          <p className='label-input'>{label}</p>
          <input type="text" className='form-input' {...rest} />
      </div>
  )
}

export default Input