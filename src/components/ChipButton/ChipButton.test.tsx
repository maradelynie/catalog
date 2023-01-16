import React from 'react';
import { render, screen } from '@testing-library/react';
import ChipButton from './index';
import userEvent from '@testing-library/user-event';

test('renders label of chip', () => {
  const mockOnClick = jest.fn();
  render(<ChipButton title="testelabel" id="testeid" onClick={mockOnClick} />);

  const label = screen.getByText('testelabel');

  userEvent.click(label);

  expect(mockOnClick).toHaveBeenCalledTimes(1);

  userEvent.click(label);

  expect(mockOnClick).toHaveBeenCalledTimes(2);
});
