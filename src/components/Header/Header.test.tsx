import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders learn react link', () => {
  render(<Header />);
  const appName = screen.getByText(/AppName/i);
  const heartIcon = screen.getByTestId('pageheader_hearticon');
  const cartIcon = screen.getByTestId('pageheader_carticon');
  expect(appName).toBeInTheDocument();
  expect(heartIcon).toBeInTheDocument();
  expect(cartIcon).toBeInTheDocument();
});
