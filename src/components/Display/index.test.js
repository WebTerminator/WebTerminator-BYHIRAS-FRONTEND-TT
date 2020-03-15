import React from 'react';
import { render } from '@testing-library/react';
import Display from './index';

describe('Display', () => {
  const propsWithNoScore = {
    loosingPlayer: {
      score: 0,
      name: 'Player 1'
    }
  };

  it('should render the correct text when the score is 0', () => {
    const { getByText } = render(<Display {...propsWithNoScore} />);
    const noScoreText = 'nobody has taken a hit, carry on playing';

    expect(getByText(noScoreText)).toBeInTheDocument();
  });
});