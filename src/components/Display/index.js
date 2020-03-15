import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ loosingPlayer }) => {
  const { name, score } = loosingPlayer;

  return (
    <div className="display-wrapper">
      {
        score > 0
          ? <p className="display">{name} has taken a hit of {score}</p>
          : <p>nobody has taken a hit, carry on playing</p>
      }
    </div>
  )
};

Display.propTypes = {
  loosingPlayer: PropTypes.object
};

export default Display;