import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './index';

test('renders select with icon', () => {
  render(<NavigationBar page={2} />);

  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
});
