import React from 'react';

function Card({title, imageSource}) {
  return (
    <div className="card text-center bg-dark">
      <img src={imageSource} alt=""  />   
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}
        </h4>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
        <a href='#!' className='btn btn-outline-secondary rounded-0'>Go to this website</a>
      </div>
    </div>
    )
}

export default Card;
