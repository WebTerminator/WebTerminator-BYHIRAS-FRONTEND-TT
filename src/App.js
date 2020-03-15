import React, { useState } from 'react';
import './App.scss';
import { Player as Player1 } from './components/player';
import { Player as Player2 } from './components/player';
import { getNDicesValue } from './util/index'

const App = () => {
  const [dicesValue, setDicesValue] = useState({});
  const [lossValueP1, setLossValueP1] = useState(0);
  const [lossValueP2, setLossValueP2] = useState(0);
  const [loosingPlayer, setLoosingPlayer] = useState({ name: '', score: 0 });

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
        <Player1 lossValue={lossValueP1} dicesValue={player1DicesValues} name="Player 1" />
        {loosingPlayer.name !== '' &&
          (loosingPlayer.score === 0
            ? <p>nobody has taken a hit, carry on playing</p>
            : <p className="display">{loosingPlayer.name} has taken a hit of {loosingPlayer.score}</p>
          )}
        <Player2 lossValue={lossValueP2} dicesValue={player2DicesValues} name="Player 2" />
        <button onClick={handleOnClick}>Attack!</button>
      </div>
    </section>
  );
}

export default App;
