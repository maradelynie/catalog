import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './index';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders select with icon', () => {
  render(
    <Router>
      <ProductCard
        item={{
          id: 29,
          title: 'Generic Steel Chicken',
          price: 689,
          description:
            "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
          images: [
            'https://api.lorem.space/image/fashion?w=640&h=480&r=9023',
            'https://api.lorem.space/image/fashion?w=640&h=480&r=9236',
            'https://api.lorem.space/image/fashion?w=640&h=480&r=2635'
          ],
          creationAt: new Date(),
          updatedAt: new Date(),
          category: {
            id: 1,
            name: 'Clothes',
            image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=5664',
            creationAt: new Date(),
            updatedAt: new Date()
          }
        }}
        list
      />
    </Router>
  );

  // expect(screen.getByText('descriptionteste')).toBeInTheDocument();
  // expect(screen.getByText('titletest')).toBeInTheDocument();
  // expect(screen.getByText('$ 10.00')).toBeInTheDocument();
});
