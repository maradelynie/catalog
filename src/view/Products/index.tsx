import {
  faMagnifyingGlass,
  faList,
  faArrowDownWideShort,
  faTrash,
  faTable
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
import ProductCard from '../../components/ProductCard';
import { CategoriesI, ProductI } from '../../models/interfaces';
import { getProductsCategories, getProductsPagination } from '../../sevices';

export default function Products() {
  const [page, setPage] = useState(1);
  const [filteredCategory, setFilteredCategory] = useState<string[]>([]);
  const [listVisualization, setListVisualization] = useState(false);

  const productsData = useQuery<ProductI[]>(['products', page], () =>
    getProductsPagination(page)
  );

  const categoryData = useQuery<CategoriesI[]>(['categories'], () =>
    getProductsCategories()
  );

  const updateCategoryFilter = (id: string) => {
    setFilteredCategory(list => {
      if (list.includes(id)) return list.filter(item => item !== id);
      return [...list, id];
    });
  };
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
        updateCategoryFilter={updateCategoryFilter}
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
              label="Search"
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
          </div>
        </section>
        <hr />
        {filteredCategory.length ? (
          <>
            <section className="productspage_filtersection">
              <div className="chipfilter_container">
                {categoryData.data?.map(filters => {
                  if (filteredCategory.includes(filters.id.toString())) {
                    return (
                      <React.Fragment key={filters.id}>
                        <ChipButton
                          onClick={() =>
                            updateCategoryFilter(filters.id.toString())
                          }
                          id={filters.id}
                          title={filters.name}
                        />
                      </React.Fragment>
                    );
                  } else return <></>;
                })}
              </div>

              <IconButton
                onClick={() => setFilteredCategory([])}
                type={'danger'}
                icon={<FontAwesomeIcon icon={faTrash} />}
              />
            </section>
            <hr />
          </>
        ) : (
          <></>
        )}
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
