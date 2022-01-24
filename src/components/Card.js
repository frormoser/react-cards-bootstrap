import React from 'react';
import img1 from '../assets/img1.jpeg'

function Card() {
  return (
    <div className="card">
      <img src= {img1} alt="" width="400" height="340" />   
      <div className='card-body'>
        <h4 className='card-title'>My title</h4>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
      </div>
    </div>
    )
}

export default Card;
