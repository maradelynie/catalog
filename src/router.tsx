import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Favorites from './view/Favorites';

import Product from './view/Product';
import Products from './view/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Products />
      </>
    )
  },
  {
    path: '/product/:productId',

    element: (
      <>
        <Header />
        <Product />
      </>
    )
  },
  {
    path: '/favorites',
    element: (
      <>
        <Header />
        <Favorites />
      </>
    )
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
