import {
  faMagnifyingGlass,
  faList,
  faArrowDownWideShort,
  faTable
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import './style.css';
import IconButton from '../../components/IconButton';
import InputSelect from '../../components/InputSelect';
import InputText from '../../components/InputText';
import NavigationBar from '../../components/NavigationBar';
import ProductCard from '../../components/ProductCard';
import { ProductI } from '../../models/interfaces';

const orderOptions = [
  {
    id: 1,
    label: 'A to Z tilte',
    value: 'za'
  },
  {
    id: 2,
    label: 'Z to A tilte',
    value: 'az'
  },
  {
    id: 3,
    label: 'Price lowest to highest',
    value: 'priceLowest'
  },
  {
    id: 4,

    label: 'Price highest to lowest',
    value: 'priceHighest'
  }
];

type sort = {
  id: number;
  label: string;
  value: string;
};

export default function Favorites() {
  const [listVisualization, setListVisualization] = useState(false);
  const [productList, setProductList] = useState<ProductI[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductI[]>([]);
  const [pagninatedData, setPagninatedData] = useState<ProductI[]>([]);

  const [page, setPage] = useState(1);

  const handleChangeSearch = (value: string) => {
    setFilteredProducts(
      productList.filter(product =>
        product.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };

  const handleSort = (sortSelected: sort) => {
    const newList = [...filteredProducts];
    if (sortSelected.id === 1)
      newList.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    else if (sortSelected.id === 2)
      newList.sort(function (a, b) {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
    else if (sortSelected.id === 3)
      newList.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    else
      newList.sort(function (a, b) {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });

    setFilteredProducts(newList);
  };

  const handlePagination = (value: number) => {
    setPage(value);
    setPagninatedData(filteredProducts.slice(value * 20 - 20, value * 20));
  };

  useEffect(() => {
    handlePagination(1);
  }, [filteredProducts]);

  useEffect(() => {
    const start = async () => {
      const getStorage = await JSON.parse(
        localStorage.getItem('catalog_fav') || '[]'
      );
      setProductList(getStorage);
      setFilteredProducts(getStorage);
      setPagninatedData(getStorage.slice(0, 20));
    };
    start();
  }, []);

  return (
    <>
      <div className="productspage_container">
        <section className="productspage_searchsection">
          <InputText
            label="Search"
            onChange={value => handleChangeSearch(value)}
            id="products_search_input"
            style="dark"
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
          <div className="productspage_searchsection_select">
            <InputSelect
              label="Sort"
              id="products_select"
              style="dark"
              icon={<FontAwesomeIcon icon={faArrowDownWideShort} />}
              options={orderOptions}
              onChange={handleSort}
            />
            <IconButton
              onClick={() => setListVisualization(!listVisualization)}
              icon={
                <FontAwesomeIcon icon={listVisualization ? faTable : faList} />
              }
            />
          </div>
        </section>
        <hr />
        <main
          className={
            'productspage_productlist ' + (listVisualization ? 'list' : '')
          }
        >
          {pagninatedData?.map(productCard => {
            return (
              <React.Fragment key={productCard.id}>
                <ProductCard list={listVisualization} item={productCard} />
              </React.Fragment>
            );
          })}
        </main>
        <hr />
        <NavigationBar
          page={page}
          setPage={handlePagination}
          lastPage={Math.ceil(filteredProducts.length / 20)}
        />
      </div>
    </>
  );
}
