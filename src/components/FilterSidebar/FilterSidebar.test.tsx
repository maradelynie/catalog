import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterSidebar from './index';

test('renders learn react link', () => {
  const mockOnClick = jest.fn();
  render(
    <FilterSidebar
      categoryData={[]}
      filteredCategory={[]}
      updateCategoryFilter={id => null}
      closeAside={mockOnClick}
      mobileAside={true}
    />
  );

  const price = screen.getByText('Price');
  const category = screen.getByText('Category');
  const close = screen.getByTestId('filtersidebar_closebutton');

  expect(price).toBeInTheDocument();
  expect(category).toBeInTheDocument();

  userEvent.click(close);

  expect(mockOnClick).toBeCalled();
});
