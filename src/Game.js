import React from 'react';
import './Game.css';
import Board from './Board'
import Message from './Message';

const Game = () => {

  return (
    <section className="game-base">
      <Board />
      <Message />
    </section>
  )
}

export default Game;
