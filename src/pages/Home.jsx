import React from 'react';
import Button from '../components/Button';

function Home() {
  return (
    <div className='landing-container'>
      <div className='landing-content container'>
        <h1 className='landing-heading'>
          What's Your '<span>Next</span>'
        </h1>
        <p className='landing-subtext'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
        <Button text='Explore Now' style='filled' />
      </div>
    </div>
  );
}

export default Home;
