import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div>
        <div className='header'>
          <a>MERN-Blog</a>
          <p className='logout'>Logout</p>
        </div>
    </div>
  )
}

export default Header;