import React from 'react';
import Button from './Button';
import Logo from '../assets/cloud-vector-blue.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-container container'>
      <div className='navbar-layout'>
        <img className='brand' src={Logo} />
        <div>
          <div className='navbar-menu'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/practice-areas'>
              Practice Areas
            </Link>
            <Link className='nav-link' to='/about-us'>
              About Us
            </Link>
            <Link className='nav-link' to='/insights'>
              Insights
            </Link>
            <Link className='nav-link' to='/industries'>
              Industries
            </Link>
          </div>
        </div>
        <Button text='Get Started' style='outlined' />
      </div>
    </div>
  );
}

export default Navbar;
