import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

export const Player = ({
  dicesValue,
  icon,
  lossValue,
  healthPoints,
  isLayoutReversed,
  name
}) => {
  const [health, setHealth] = useState(healthPoints)
  const className = classNames('player-info', ({ 'reverse-layout': isLayoutReversed }));

  useEffect(() => {
    setHealth(health - lossValue);
  }, [lossValue]);

  return (
    <div className="player-wrapper">
      <p>{name} has health {health}</p>
      <div className={className}>
        {icon}
        <div className="health-bar-wrapper">
          <div style={{ top: `${100 - health}px` }} className="health-bar" />
        </div>
        {dicesValue}
      </div>
    </div>
  )
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  healthPoints: PropTypes.number,
  dicesValue: PropTypes.number,
  icon: PropTypes.element,
  isLayoutReversed: PropTypes.bool,
  lossValue: PropTypes.number
};

Player.defaultProps = {
  healthPoints: 100
};
