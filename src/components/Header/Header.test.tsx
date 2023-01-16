import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const appName = screen.getByText(/AppName/i);
  const heartIcon = screen.getByTestId('pageheader_hearticon');
  const cartIcon = screen.getByTestId('pageheader_carticon');
  expect(appName).toBeInTheDocument();
  expect(heartIcon).toBeInTheDocument();
  expect(cartIcon).toBeInTheDocument();
});
