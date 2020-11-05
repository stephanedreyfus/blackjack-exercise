import React, {useEffect} from 'react';
import axios from 'axios';
import './Game.css';
import Board from './Board'
import Message from './Message';

const Game = () => {

  const BASE_API = "https://deckofcardsapi.com/api/";
  const deckNum = 1;
  const tempMsg = "No messages yet!"

  // Get a new deck.
  let deckCall =  async () => {
    try {
      let res = await axios.get(BASE_API + `deck/new/shuffle/?deck_count=${deckNum}`);
      return res;
    }
    catch (e){
      console.log({msg: "Failed to get deck", error: e});
    };
    
  };
  
  
  // Get cards.
  let cardCall = async (id) => {
    try {
      let res = await axios.get(BASE_API + `deck/${id}/draw/?count=2`);
      return res.cards;
    }
    catch (e) {
      console.log({msg: `Failed to get cards from deck ${deckInfo.deck_id}`, error: e});
    };
  }
  
  useEffect(() => {
    let deckInfo = deckCall();
    const cards = cardCall(deckInfo.deck_id);
  });

  return (
    <section className="game-base">
      <Board cards={cards}/>
      <Message msg={tempMsg}/>
    </section>
  );
}

export default Game;
