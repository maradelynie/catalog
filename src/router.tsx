import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Product from './view/Product';
import Products from './view/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />
  },
  {
    path: '/product/:productId',
    element: <Product />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
