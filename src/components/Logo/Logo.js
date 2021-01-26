import React from 'react';
import csgoLogo from '../Logo/csgoLogo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className=''>
        <img className='logo' alt='logo' src={csgoLogo}/>
    </div>
  );
}

export default Logo;