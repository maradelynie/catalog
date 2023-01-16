import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterSidebar from './index';

test('renders learn react link', () => {
  render(
    <FilterSidebar
      categoryData={[]}
      filteredCategory={[]}
      updateCategoryFilter={id => null}
    />
  );

  const price = screen.getByText('Price');
  const category = screen.getByText('Category');

  expect(price).toBeInTheDocument();
  expect(category).toBeInTheDocument();
});
