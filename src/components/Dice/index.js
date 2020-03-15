import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Dice = ({ dots }) => {
  const className = classnames("dice",
    { "one-dot": dots === 1 },
    { "two-dot": dots === 2 },
    { "three-dot": dots === 3 },
    { "four-dot": dots === 4 },
    { "five-dot": dots === 5 },
    { "six-dot": dots === 6 },
  );

  const oneDot = <span className="dice-dot" />;
  const twoDots =
    <div className="dots-row">
      {oneDot}
      {oneDot}
    </div>;

  return (
    <div className={className}>
      {dots === 1 && oneDot}
      {dots === 2 && twoDots}
      {
        dots === 3 &&
        <div className="dots-row--special">
          {oneDot}
          {oneDot}
          {oneDot}
        </div>
      }
      {
        dots === 4 &&
        <div className="dots-rows">
          {twoDots}
          {twoDots}
        </div>
      }
      {
        dots === 5 &&
        <div className="dots-rows">
          {twoDots}
          <div className="dots-row">
            {oneDot}
          </div>
          {twoDots}
        </div>
      }
      {
        dots === 6 &&
        <div className="dots-rows">
          {twoDots}
          {twoDots}
          {twoDots}
        </div>
      }
    </div>
  );
};

Dice.propTypes = {
  dots: PropTypes.number.isRequired
};

export default Dice;