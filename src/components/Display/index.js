import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ loosingPlayer }) => {
  const { name, score } = loosingPlayer;

  const getTextToDsiplay = (score) => {
    let text = '';

    switch (score) {
      case null:
        text = 'The game has not begun. Press on Attack to begin.'
        break;
      case 0:
        text = 'nobody has taken a hit, carry on playing'
        break;
      default:
        text = `${name} has taken a hit of ${score}`
    }

    return text;
  }

  return (
    <div className="display-wrapper">
      <p>{getTextToDsiplay(score)}</p>
    </div>
  )
};

Display.propTypes = {
  loosingPlayer: PropTypes.object
};

export default Display;