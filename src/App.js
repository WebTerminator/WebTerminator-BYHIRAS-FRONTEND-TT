import React from 'react';
import './App.scss';
import { Player as Player1 } from './components/player';
import { Player as Player2 } from './components/player';
import { generateRandomNumber } from './util/index'

const App = () => {
  const handleOnClick = () => {
    console.log('handleOnClick')
  }

  return (
    <section className="app">
      <div className="game-wrapper">
        <Player1 name="Player 1" />
        <Player2 name="Player 2" />
        <button onClick={handleOnClick}>Attack!</button>
      </div>
    </section>
  );
}

export default App;
