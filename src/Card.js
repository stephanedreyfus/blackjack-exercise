import React from 'react';
import './Card.css';

const Card = ({code, image}) => {

  return (
    <div className="game-card">
      <img
        src={image}
        alt={code}
      />
    </div>
  );
}

export default Card;