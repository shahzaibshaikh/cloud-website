import React from 'react';
import Button from './Button';
import Logo from '../assets/cloud-vector-blue.svg';

function Navbar() {
  return (
    <div className='navbar-container container'>
      <div className='navbar-layout'>
        <img className='brand' src={Logo} />
        <div>
          <ul className='navbar-menu'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>Practice Areas</li>
            <li className='nav-link'>About Us</li>
            <li className='nav-link'>Insights</li>
            <li className='nav-link'>Industries</li>
          </ul>
        </div>
        <Button text='Get Started' style='outlined' />
      </div>
    </div>
  );
}

export default Navbar;
