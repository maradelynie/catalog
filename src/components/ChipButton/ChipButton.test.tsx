import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './index';

test('renders label of chip', () => {
  render(<Checkbox title="testelabel" id="testeid" />);

  const label = screen.getByText('testelabel');

  expect(label).toBeInTheDocument();
});
