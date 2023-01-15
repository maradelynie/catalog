import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconButton from '../IconButton';

import './style.css';

type ProductCardProps = {
  id: string | number;
  title: string;
  images: string[];
  description: string;
  price: number;
  list?: boolean;

};

export default function ProductCard({
  description,
  title,
  images,
  id,
  price,
  list
}: ProductCardProps) {
  const listStyle = list ? 'list' : '';
  return (
    <div className={'productspage_productcard ' + listStyle}>
      <section className={'productspage_productimage ' + listStyle}>
        <img src={images[0]} alt={title} />
      </section>
      <section className={'productspage_productinfo ' + listStyle}>
        <div>
          <small>Ref {id}</small>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <small>Price</small>
          <h2>$ {price.toFixed(2)}</h2>
        </div>
        <IconButton
          size="lg"
          icon={<FontAwesomeIcon icon={faCartShopping} size="lg" />}
        />
      </section>
    </div>
  );
}
