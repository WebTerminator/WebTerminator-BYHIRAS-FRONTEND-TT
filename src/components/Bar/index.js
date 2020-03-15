import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Bar = ({ dicesValue, health }) => {
  const style = classNames(
    'health-bar-wrapper',
    ({
      'danger-one': health < 50,
      'danger-two': health < 20
    })
  );

  return (
    <div className="bar-wrapper">
      <p>
        {dicesValue}
      </p>
      <div className={style}>
        <div className="health-bar" style={{ top: `${100 - health}px` }} />
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