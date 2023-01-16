import {
  faMagnifyingGlass,
  faList,
  faArrowDownWideShort,
  faTable,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import './style.css';
import ChipButton from '../../components/ChipButton';
import FilterSidebar from '../../components/FilterSidebar';
import IconButton from '../../components/IconButton';
import InputSelect from '../../components/InputSelect';
import InputText from '../../components/InputText';
import NavigationBar from '../../components/NavigationBar';
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard';
import { CategoriesI, ProductI } from '../../models/interfaces';
import { getProductsCategories, getProductsPagination } from '../../sevices';

export default function Products() {
  const [page, setPage] = useState(1);
  const [mobileAside, setMobileAside] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState<CategoriesI | null>(
    null
  );
  const [listVisualization, setListVisualization] = useState(false);

  const productsData = useQuery<ProductI[]>(
    ['products', page, filteredCategory],
    () => getProductsPagination(page, filteredCategory)
  );

  const categoryData = useQuery<CategoriesI[]>(['categories'], () =>
    getProductsCategories()
  );
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
    <>
      <FilterSidebar
        categoryData={categoryData.data || []}
        filteredCategory={filteredCategory}
        updateCategoryFilter={setFilteredCategory}
        closeAside={() => setMobileAside(!mobileAside)}
        mobileAside={mobileAside}
      />
      <div className="productspage_container">
        <section className="productspage_searchsection">
          <InputText
            label="Search"
            onChange={() => ''}
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
        {filteredCategory ? (
          <>
            <section className="productspage_filtersection">
              <div className="chipfilter_container">
                <ChipButton
                  onClick={() => setFilteredCategory(null)}
                  id={filteredCategory.id}
                  title={filteredCategory.name}
                />
              </div>
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
          {productsData.data?.map(productCard => {
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
