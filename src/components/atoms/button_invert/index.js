import React from 'react';
import './button_invert.scss';

const ButtonInvert = ({title, ...rest}) => {
  return (
      <div>
          <button className='button-invert' {...rest}>{title}</button>
      </div>
  )
}

export default ButtonInvert;