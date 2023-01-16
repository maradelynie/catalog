import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoriteButton from './index';

test('renders icon', () => {
  const mockOnClick = jest.fn();
  render(<FavoriteButton active={false} onClick={mockOnClick} />);

  const button: HTMLInputElement = screen.getByText('icon sample');

  expect(button).toBeInTheDocument();

  userEvent.click(button);

  expect(mockOnClick).toHaveBeenCalledTimes(1);

  userEvent.click(button);

  expect(mockOnClick).toHaveBeenCalledTimes(2);
});
