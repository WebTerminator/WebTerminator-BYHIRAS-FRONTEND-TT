import React, { useState, useEffect } from 'react';
import Bar from '../Bar/index';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dice from '../Dice/index';

export const Player = ({
  dicesValue,
  icon,
  lossValue,
  healthPoints,
  isLayoutReversed
}) => {
  const [health, setHealth] = useState(healthPoints)
  const className = classNames('player-info', ({ 'reverse-layout': isLayoutReversed }));

  useEffect(() => {
    setHealth(health - lossValue);
  }, [lossValue]);

  return (
    <div className="player-wrapper">
      <div className={className}>
        {icon}
        <Dice dots={6} />
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
  lossValue: PropTypes.number
};

Player.defaultProps = {
  healthPoints: 100
};
