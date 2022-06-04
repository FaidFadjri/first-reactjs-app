import React from 'react'
import './textarea.scss';

const TextArea = ({label, ...rest}) => {
  return (
      <div className='form-group'>
          <p className='label-input'>{label}</p>
          <textarea className='textarea' {...rest}/>
      </div>
  )
}

export default TextArea