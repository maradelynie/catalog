import React from 'react';
import { render, screen } from '@testing-library/react';
import InputSelect from './index';

test('renders select with icon', () => {
  render(
    <InputSelect
      label="testelabel"
      id="testeid"
      options={[{ id: 1, value: 'value', label: 'label' }]}
      icon={<p>icon sample</p>}
      onChange={() => null}
    />
  );

  const icon: HTMLInputElement = screen.getByText('icon sample');
  expect(icon).toBeInTheDocument();

  const label: HTMLInputElement = screen.getByText('label');
  expect(label).toBeInTheDocument();
});
