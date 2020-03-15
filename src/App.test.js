import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const { getByText, fireEvent } = render(<App />);
  const button = getByText('Attack!');

  it('should render the button with text Attack!', () => {
    expect(button).toBeInTheDocument();
  });
});