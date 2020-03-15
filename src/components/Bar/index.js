import React from 'react';
import PropTypes from 'prop-types';

const Bar = ({ dicesValue, health }) => {
  return (
    <div className="bar-wrapper">
      <p>
        {dicesValue}
      </p>
      <div className="health-bar-wrapper">
        <div style={{ top: `${100 - health}px` }} className="health-bar" />
      </div>
      <p>
        {health}
      </p>
    </div>
  );
};

Bar.propTypes = {
  dicesValue: PropTypes.number,
  health: PropTypes.number
}

export default Bar;