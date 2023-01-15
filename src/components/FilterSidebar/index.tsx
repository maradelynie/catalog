import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Checkbox from '../Checkbox';
import InputText from '../InputText';
import RangeBar from '../ProgressBar';

import './style.css';

export default function FilterSidebar() {
  // since the API does not have an totalMaxValue search it will be added manualy
  const limit = 10000;

  const mock = [
    {
      id: 1,
      name: 'Clothes',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=6181',
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z'
    },
    {
      id: 2,
      name: 'Electronics',
      image: 'https://api.lorem.space/image/watch?w=640&h=480&r=8038',
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z'
    },
    {
      id: 3,
      name: 'Prueba de categoria',
      image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8455',
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T08:09:29.000Z'
    },
    {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1417',
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z'
    },
    {
      id: 5,
      name: 'Others',
      image: 'https://api.lorem.space/image?w=640&h=480&r=379',
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z'
    },
    {
      id: 6,
      name: 'NUeva CATEGORIA',
      image: 'https://placeimg.com/640/480/any',
      creationAt: '2023-01-14T05:58:40.000Z',
      updatedAt: '2023-01-14T05:58:40.000Z'
    },
    {
      id: 7,
      name: 'Hola Mundo',
      image: 'https://placeimg.com/640/480/any',
      creationAt: '2023-01-14T05:59:00.000Z',
      updatedAt: '2023-01-14T06:02:56.000Z'
    },
    {
      id: 8,
      name: 'Nueva CATEGORIA',
      image: 'https://placeimg.com/640/480/any',
      creationAt: '2023-01-14T06:03:08.000Z',
      updatedAt: '2023-01-14T06:03:08.000Z'
    }
  ];
  return (
    <>
      <aside className="filtersidebar">
        <h3>Price</h3>
        <section className="filtersidebar_inputprice_container">
          <InputText label="lowest" id="price_input" size="sm" />
          <span>up to</span>
          <InputText label="highest" id="price_input" size="sm" />
        </section>
        <RangeBar max={3654} min={2230} limit={limit} />
        <h3>Category</h3>
        <ul className="filtersidebar_categorylist">
          {mock.map(category => {
            return (
              <li key={category.id}>
                <Checkbox label={category.name} id={category.id} />
              </li>
            );
          })}
        </ul>
        <FontAwesomeIcon className="filtersidebar_closebutton" icon={faTimes} />
      </aside>
    </>
  );
}
