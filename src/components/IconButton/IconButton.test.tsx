import React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from './index';

test('renders icon', () => {
  render(<IconButton icon={<p>icon sample</p>} />);

  const button: HTMLInputElement = screen.getByText('icon sample');

  expect(button).toBeInTheDocument();
});
