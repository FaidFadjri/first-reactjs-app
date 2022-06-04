import React from 'react'
import './input_file.scss';

const InputFile = ({label, ...rest}) => {
  return (
      <div className='form-group'>
          <p className='label-input'>{label}</p>
          <input type="file" className='form-input-file' {...rest} />
      </div>
  )
}

export default InputFile