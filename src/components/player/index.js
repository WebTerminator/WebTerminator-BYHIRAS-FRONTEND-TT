import React, { useState, useEffect } from 'react';
import Bar from '../Bar/index';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dice from '../Dice/index';

export const Player = ({
  dice1,
  dice2,
  dicesValue,
  hasTheGameStarted,
  icon,
  lossValue,
  healthPoints,
  name,
  isLayoutReversed,
  setWinner
}) => {
  const [health, setHealth] = useState(healthPoints)
  const className = classNames('player-info', ({ 'reverse-layout': isLayoutReversed }));
  const diceHolderClassName = classNames('dice-holder', ({
    'dice-holder--active': hasTheGameStarted
  }))

  useEffect(() => {
    setHealth(health - lossValue);

    if (health < 0) {
      if (name === 'Player1') {
        setWinner('Player2')
      } else {
        setWinner('Player1')
      }
    }
  }, [lossValue]);

  return (
    <div className="player-wrapper">
      <div className={className}>
        {icon}

        <div className={diceHolderClassName}>
          <div className="dice-holder-inner">
            <Dice dots={dice1} />
            <Dice dots={dice2} />
          </div>
        </div>

        <Bar health={health} dicesValue={dicesValue} />
      </div>
    </div>
  )
};

Player.propTypes = {
  healthPoints: PropTypes.number,
  dicesValue: PropTypes.number,
  icon: PropTypes.element,
  isLayoutReversed: PropTypes.bool,
  lossValue: PropTypes.number,
  dice1: PropTypes.number,
  dice2: PropTypes.number,
  hasTheGameStarted: PropTypes.bool,
  name: PropTypes.string,
  setWinner: PropTypes.func
};

Player.defaultProps = {
  healthPoints: 100
};
