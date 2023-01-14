import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './index';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<Checkbox label="testelabel" id="testeid" />);

  const checkbox: HTMLInputElement = screen.getByTestId('testeid_testelabel');
  const label = screen.getByText('testelabel');
  const dommiCheckbox = screen.getByTestId('testeid_span');

  expect(label).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(dommiCheckbox).toBeInTheDocument();

  userEvent.click(checkbox);

  expect(checkbox.checked).toBeTruthy();

  userEvent.click(label);

  expect(checkbox.checked).not.toBeTruthy();
});
