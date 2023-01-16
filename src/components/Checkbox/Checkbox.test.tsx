import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './index';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  const mockOnClick = jest.fn();
  render(
    <Checkbox
      label="testelabel"
      id="testeid"
      checked={true}
      onClick={mockOnClick}
    />
  );

  const checkbox: HTMLInputElement = screen.getByTestId('testeid_testelabel');
  const label = screen.getByText('testelabel');
  const dommiCheckbox = screen.getByTestId('testeid_span');

  expect(label).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(dommiCheckbox).toBeInTheDocument();

  userEvent.click(checkbox);

  expect(mockOnClick).toHaveBeenCalledTimes(1);

  userEvent.click(label);

  expect(mockOnClick).toHaveBeenCalledTimes(2);
});
