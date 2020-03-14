import React, { useState } from 'react';
import './App.scss';
import { Player as Player1 } from './components/player';
import { Player as Player2 } from './components/player';
import { generateRandomNumber } from './util/index'

const App = () => {
  const [dicesValue, setDicesValue] = useState({});
  const [lossValueP1, setLossValueP1] = useState(0);
  const [lossValueP2, setLossValueP2] = useState(0);
  const [loosingPlayer, setLoosingPlayer] = useState({ name: '', score: 0 });

  const MIN_NUM = 1;
  const MAX_NUM = 6;

  const getRandomNumber = () => generateRandomNumber(MIN_NUM, MAX_NUM);

  const getDicesValue = () => {
    const dice1 = getRandomNumber();
    const dice2 = getRandomNumber();
    const dice3 = getRandomNumber();
    const dice4 = getRandomNumber();

    return {
      dice1,
      dice2,
      dice3,
      dice4
    }
  };

  const handleOnClick = () => {
    const dicesValue = getDicesValue();
    const { dice1, dice2, dice3, dice4 } = dicesValue;

    const playery1DicesSum = dice1 + dice2;
    const playery2DicesSum = dice3 + dice4;

    if (playery1DicesSum < playery2DicesSum) {
      const score = playery2DicesSum - playery1DicesSum;
      setLossValueP1(score);
      setLoosingPlayer({ name: 'Player1', score });
    } else {
      const score = playery1DicesSum - playery2DicesSum;
      setLossValueP2(score);
      setLoosingPlayer({ name: 'Player2', score });
    }


    setDicesValue(dicesValue);
  };

  const { dice1, dice2, dice3, dice4 } = dicesValue;

  return (
    <section className="app">
      <div className="game-wrapper">
        <Player1 lossValue={lossValueP1} dicesValue={{ dice1, dice2 }} name="Player 1" />
        {loosingPlayer.name !== '' &&
          (loosingPlayer.score === 0
            ? <p>nobody has taken a hit, carry on playing</p>
            : <p className="display">{loosingPlayer.name} has taken a hit of {loosingPlayer.score}</p>
          )}
        <Player2 lossValue={lossValueP2} dicesValue={{ dice3, dice4 }} name="Player 2" />
        <button onClick={handleOnClick}>Attack!</button>
      </div>
    </section>
  );
}

export default App;
