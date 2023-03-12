import React from 'react';

function Card({ number, heading, text }) {
  return (
    <div className='card'>
      <p className='card-number'>{number}</p>
      <h3 className='card-heading'>{heading}</h3>
      <p className='card-text'>{text}</p>
    </div>
  );
}

export default Card;
