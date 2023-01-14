import React from 'react';
import {
  faMagnifyingGlass,
  faList,
  faArrowDownWideShort,
  faTimes,
  faTrash,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputText from '../InputText';

import './style.css';
import InputSelect from '../InputSelect';
import IconButton from '../IconButton';

export default function Products() {
  const orderOptions = [
    {
      id: 1,
      label: 'Price lowest to highest',
      value: 'priceLowest'
    },
    {
      id: 2,
      label: 'Price highest to lowest',
      value: 'priceHighest'
    }
  ];

  return (
    <div className="productspage_container">
      <section className="productspage_searchsection">
        <InputText
          label="Search"
          id="products_input"
          size="lg"
          style="dark"
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
        <InputSelect
          label="Search"
          id="products_input"
          size="md"
          style="dark"
          icon={<FontAwesomeIcon icon={faArrowDownWideShort} />}
          options={orderOptions}
        />
        <IconButton icon={<FontAwesomeIcon icon={faList} />} />
      </section>
      <hr />
    </div>
  );
}
