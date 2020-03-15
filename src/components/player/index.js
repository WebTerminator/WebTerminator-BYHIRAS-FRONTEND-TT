import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

export const Player = ({
  dicesValue,
  lossValue,
  healthPoints,
  isLayoutReversed,
  name
}) => {
  const [health, setHealth] = useState(healthPoints)
  const className = classNames('layout', ({ 'right': isLayoutReversed }));

  useEffect(() => {
    setHealth(health - lossValue);
  }, [lossValue]);

  return (
    <>
      <div className={className}>
        {name} has health {health} points left and the score is {dicesValue}
      </div>
    </>
  )
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  healthPoints: PropTypes.number,
  dicesValue: PropTypes.number,
  icon: PropTypes.element,
  layout: PropTypes.string,
  lossValue: PropTypes.number
};

Player.defaultProps = {
  healthPoints: 100
};
