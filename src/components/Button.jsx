import React from 'react';

function Button({ text, style }) {
  if (style === 'outlined')
    return <button className='button-main-outlined'>{text}</button>;
  else return <button className='button-main-filled'>{text}</button>;
}

export default Button;
