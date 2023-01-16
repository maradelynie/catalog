import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RangeBar from './index';

test('renders learn react link', () => {
  const mockSetMax = jest.fn();
  const mockSetMin = jest.fn();

  render(
    <RangeBar
      max={50}
      min={20}
      limit={100}
      setMax={mockSetMax}
      setMin={mockSetMin}
    />
  );

  const range: HTMLInputElement = screen.getByTestId('rangeBar');

  expect(range).toBeInTheDocument();

  expect(range.style.left).toBe('20%');
  expect(range.style.width).toBe('30%');

  userEvent.click(range);

  expect(mockSetMax).toBeCalled();
});
