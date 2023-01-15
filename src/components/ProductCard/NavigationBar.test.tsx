import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './index';

test('renders select with icon', () => {
  render(
    <ProductCard
      description={'descriptionteste'}
      title={'titletest'}
      images={['imgteste']}
      id={'idteste'}
      price={10}
      list
    />
  );

  expect(screen.getByText('descriptionteste')).toBeInTheDocument();
  expect(screen.getByText('titletest')).toBeInTheDocument();
  expect(screen.getByText('$ 10.00')).toBeInTheDocument();
});
