import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductI } from '../../models/interfaces';
import FavoriteButton from '../FavoriteButton';

import IconButton from '../IconButton';

import './style.css';

type ProductCardProps = {
  item: ProductI;
  list?: boolean;
};

const getIsFavorite = async (id: string | number) => {
  const getStorage = await JSON.parse(
    localStorage.getItem('catalog_fav') || '[]'
  );
  return getStorage.some((product: ProductI) => product.id === id);
};

export default function ProductCard({ item, list }: ProductCardProps) {
  const navigate = useNavigate();
  const listStyle = list ? 'list' : '';

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const start = async () => {
      const favorite = await getIsFavorite(item.id);
      setIsFavorite(favorite);
    };
    start();
  }, []);
  const handleFavorite = async () => {
    const list = await JSON.parse(localStorage.getItem('catalog_fav') || '[]');
    if (isFavorite)
      localStorage.setItem(
        'catalog_fav',
        JSON.stringify(
          list.filter((product: ProductI) => product.id !== item.id)
        )
      );
    else localStorage.setItem('catalog_fav', JSON.stringify([...list, item]));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={'productspage_productcard ' + listStyle}>
      <section className={'productspage_productimage ' + listStyle}>
        <img src={item.images[0]} alt={item.title} />
      </section>
      <section className={'productspage_productinfo ' + listStyle}>
        <div>
          <small>Ref {item.id}</small>
          <h3
            onClick={() => navigate('/product/' + item.id)}
            className="productspage_productitle"
          >
            {item.title}
          </h3>
          <p>{item.description}</p>
        </div>
        <div>
          <small>Price</small>
          <h3>$ {item.price.toFixed(2)}</h3>
        </div>
        <div className={'favoritebutton_container ' + listStyle}>
          <FavoriteButton active={isFavorite} onClick={handleFavorite} />
        </div>
        <div className={'cartbutton_container ' + listStyle}>
          <IconButton
            onClick={() => null}
            size="lg"
            icon={<FontAwesomeIcon icon={faCartShopping} size="lg" />}
          />
        </div>
      </section>
    </div>
  );
}
