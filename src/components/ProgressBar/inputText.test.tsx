import React from 'react';
import { render, screen } from '@testing-library/react';
import RangeBar from './index';

test('renders learn react link', () => {
  render(<RangeBar max={50} min={20} limit={100} />);

  const range: HTMLInputElement = screen.getByTestId('rangeBar');

  expect(range).toBeInTheDocument();

  expect(range.style.left).toBe('20%');
  expect(range.style.width).toBe('30%');
});
