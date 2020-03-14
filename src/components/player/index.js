import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

export const Player = ({ isLayoutReversed, name }) => {
  const className = classNames('layout', ({ 'right': isLayoutReversed }));

  return <div className={className}>{name}</div>;
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  healthPoints: PropTypes.number,
  diceOne: PropTypes.number,
  diceTwo: PropTypes.number,
  icon: PropTypes.element,
  layout: PropTypes.string
};
