import React, { useState } from 'react';
import './App.scss';
import { Player as Player1 } from './components/Player';
import { Player as Player2 } from './components/Player';
import Display from './components/Display';
import { getNDicesValue } from './util/index';
import AngryFace from './assets/icons/angry-face';
import HappyFace from './assets/icons/happy-face';

const App = () => {
  const [dicesValue, setDicesValue] = useState({});
  const [lossValueP1, setLossValueP1] = useState(0);
  const [lossValueP2, setLossValueP2] = useState(0);
  const [loosingPlayer, setLoosingPlayer] = useState({ name: '', score: null });

  const handleLoosingPlayer = (score, name) => {
    if (name === 'Player1') {
      setLossValueP1(score);
    } else {
      setLossValueP2(score);
    }

    setLoosingPlayer({ name, score });
  }

  const handleOnClick = () => {
    const dicesValue = getNDicesValue(4);
    const { dice1, dice2, dice3, dice4 } = dicesValue;

    const playery1DicesSum = dice1 + dice2;
    const playery2DicesSum = dice3 + dice4;

    if (playery1DicesSum < playery2DicesSum) {
      const score = playery2DicesSum - playery1DicesSum;
      handleLoosingPlayer(score, 'Player1');
    } else {
      const score = playery1DicesSum - playery2DicesSum;
      handleLoosingPlayer(score, 'Player2');
    }

    setDicesValue(dicesValue);
  };

  const { dice1, dice2, dice3, dice4 } = dicesValue;

  const hasTheGameStarted = Object.keys(dicesValue).length !== 0;
  const player1DicesValues = hasTheGameStarted ? (dice1 + dice2) : 0;
  const player2DicesValues = hasTheGameStarted ? (dice3 + dice4) : 0;

  return (
    <section className="app">
      <div className="game-wrapper">
        <Player1
          icon={<HappyFace />}
          lossValue={lossValueP1}
          dicesValue={player1DicesValues}
        />

        <Display loosingPlayer={loosingPlayer} />

        <Player2
          isLayoutReversed={true}
          icon={<AngryFace />}
          lossValue={lossValueP2}
          dicesValue={player2DicesValues}
        />
      </div>
      <button onClick={handleOnClick}>Attack!</button>
    </section>
  );
}

export default App;
