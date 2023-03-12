import React from 'react';
import Button from './Button';
import Logo from '../assets/cloud-vector-blue.svg';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-layout'>
        <img className='brand' src={Logo} />
        <div>
          <ul className='navbar-menu'>
            <li>Home</li>
            <li>Practice Areas</li>
            <li>About Us</li>
            <li>Insights</li>
            <li>Industries</li>
          </ul>
        </div>
        <Button text='Get Started' style='outlined' />
      </div>
    </div>
  );
}

export default Navbar;
