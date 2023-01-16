import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterSidebar from './index';

test('renders learn react link', () => {
  const mockOnClick = jest.fn();
  render(
    <FilterSidebar
      categoryData={[]}
      filteredCategory={null}
      updateCategoryFilter={category => null}
      closeAside={mockOnClick}
      mobileAside={true}
      maxState={{ max: 0, setMax: (max: number) => null }}
      minState={{ min: 0, setMin: (max: number) => null }}
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
