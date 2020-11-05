import React from 'react';
import './Board.css'
import Card from './Card';

const Board = ({ cards }) => {
  return (
    <div>
      {cards.Map( c => {
        <Card
          key={c.code}
          code={c.code}
          img={c.image}
        />
      })}
    </div>
  );
}

export default Board;