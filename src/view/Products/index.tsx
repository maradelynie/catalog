import {
  faMagnifyingGlass,
  faList,
  faArrowDownWideShort,
  faTable,
  faFilter,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import './style.css';
import ChipButton from '../../components/ChipButton';
import FilterSidebar from '../../components/FilterSidebar';
import IconButton from '../../components/IconButton';
import InputSelect from '../../components/InputSelect';
import InputText from '../../components/InputText';
import Loading from '../../components/Loading';
import NavigationBar from '../../components/NavigationBar';
import ProductCard from '../../components/ProductCard';
import { CategoriesI, ProductI } from '../../models/interfaces';
import { getProductsCategories, getProductsPagination } from '../../sevices';

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

export default function Products() {
  const limit = 10000;
  const [listVisualization, setListVisualization] = useState(false);
  const [mobileAside, setMobileAside] = useState(false);
  const [productList, setProductList] = useState<ProductI[]>([]);
  const [sortStatus, setSortStatus] = useState<sort | null>(null);

  const [page, setPage] = useState(1);
  const [filteredCategory, setFilteredCategory] = useState<CategoriesI | null>(
    null
  );
  // since the API does not have an totalMaxValue search it will be added manualy
  const [max, setMax] = useState<number>(limit);
  const [min, setMin] = useState<number>(0);

  const [search, setSearch] = useState<string>('');

  const productsData = useQuery<ProductI[]>(
    ['products', page, filteredCategory, max, min, search],
    () => getProductsPagination(page, filteredCategory, max, min, search)
  );

  const handleChangeSearch = (value: string) => {
    if (value.length > 3 || !value) {
      setSearch(value);
    }
  };

  const categoryData = useQuery<CategoriesI[]>(['categories'], () =>
    getProductsCategories()
  );
  const clearFilter = () => {
    setMax(limit);
    setMin(0);
    setFilteredCategory(null);
  };

  const handleSort = (sortSelected: sort, oldList?: ProductI[]) => {
    setSortStatus(sortSelected);
    const newList = [...(oldList || productList)];
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

    setProductList(newList);
  };

  useEffect(() => {
    if (productsData.data) {
      if (sortStatus) handleSort(sortStatus, productsData.data);
      else setProductList(productsData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData.data]);

  return (
    <>
      <FilterSidebar
        categoryData={categoryData.data || []}
        filteredCategory={filteredCategory}
        updateCategoryFilter={setFilteredCategory}
        maxState={{ max, setMax }}
        minState={{ min, setMin }}
        closeAside={() => setMobileAside(!mobileAside)}
        mobileAside={mobileAside}
      />
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
            <IconButton
              className={'filtercategory_button'}
              onClick={() => setMobileAside(!mobileAside)}
              icon={<FontAwesomeIcon icon={faFilter} />}
            />
          </div>
        </section>
        <hr />
        {filteredCategory || min || max < limit || search ? (
          <>
            <section className="productspage_filtersection">
              <div className="chipfilter_container">
                {filteredCategory ? (
                  <ChipButton
                    onClick={() => setFilteredCategory(null)}
                    id={filteredCategory.id}
                    title={filteredCategory.name}
                  />
                ) : (
                  <></>
                )}

                {search ? (
                  <ChipButton
                    onClick={() => setSearch('')}
                    id={'titleSearch'}
                    title={'Title ' + search}
                  />
                ) : (
                  <></>
                )}

                {min ? (
                  <ChipButton
                    onClick={() => setMin(0)}
                    id={'minPrice'}
                    title={'Min price $' + min.toFixed(2)}
                  />
                ) : (
                  <></>
                )}

                {max < limit ? (
                  <ChipButton
                    onClick={() => setMax(10000)}
                    id={'maxPrice'}
                    title={'Max price $' + max.toFixed(2)}
                  />
                ) : (
                  <></>
                )}
              </div>
              <IconButton
                onClick={() => clearFilter()}
                type={'danger'}
                icon={<FontAwesomeIcon icon={faTrash} />}
              />
            </section>

            <hr />
          </>
        ) : (
          <></>
        )}
        <Loading
          loading={productsData.isLoading}
          error={productsData.isError}
        />
        <main
          className={
            'productspage_productlist ' + (listVisualization ? 'list' : '')
          }
        >
          {productList?.map(productCard => {
            return (
              <React.Fragment key={productCard.id}>
                <ProductCard
                  list={listVisualization}
                  description={productCard.description}
                  title={productCard.title}
                  images={productCard.images}
                  id={productCard.id}
                  price={productCard.price}
                />
              </React.Fragment>
            );
          })}
        </main>
        <hr />
        <NavigationBar page={page} setPage={setPage} />
      </div>
    </>
  );
}
