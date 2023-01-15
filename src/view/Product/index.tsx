import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Product() {
  const mock = {
    id: 3,
    title: 'Ergonomic Rubber Pants',
    price: 102,
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    images: ['https://api.escuelajs.co/api/v1/files/80cc.png'],
    creationAt: '2023-01-14T01:54:02.000Z',
    updatedAt: '2023-01-14T20:55:18.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8455',
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T21:07:56.000Z'
    }
  };

  return (
    <div className="productdetail_container">
      <Link to={'/'}>Catalog </Link> &gt; {mock.title}
    </div>
  );
}
