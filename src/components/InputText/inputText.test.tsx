import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from './index';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<InputText label="testelabel" id="testeid" size="sm" />);

  const input: HTMLInputElement = screen.getByTestId('testeid_testelabel');
  const label = screen.getByText('testelabel');

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();

  userEvent.type(input, 'teste');

  expect(input.value).toBe('teste');
});
