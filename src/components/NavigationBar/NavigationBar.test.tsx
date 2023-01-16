import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './index';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

const mockSetPage = jest.fn();

test('renders select with icon', () => {
  render(
    <Router>
      <NavigationBar page={2} setPage={mockSetPage} />
    </Router>
  );

  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();

  userEvent.click(screen.getByText('4'));

  expect(mockSetPage).toBeCalledWith(4);
});
