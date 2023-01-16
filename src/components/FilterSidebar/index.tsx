import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { CategoriesI } from '../../models/interfaces';
import Checkbox from '../Checkbox';
import InputText from '../InputText';
import RangeBar from '../ProgressBar';

import './style.css';

type FilterSidebarProps = {
  categoryData: CategoriesI[];
  filteredCategory: string[];
  updateCategoryFilter: (id: string) => void;
  closeAside: () => void;
  mobileAside: boolean;
};

export default function FilterSidebar({
  categoryData,
  filteredCategory,
  updateCategoryFilter,
  closeAside,
  mobileAside
}: FilterSidebarProps) {
  const [max, setMax] = useState<number>(10000);
  const [min, setMin] = useState<number>(0);

  // since the API does not have an totalMaxValue search it will be added manualy
  const limit = 10000;

  const handleMinChange = (value: string) => {
    const newValue = value.replace(/[^0-9]+/g, '');
    if (+newValue >= 0 && +newValue < max) {
      setMin(+newValue);
    }
  };

  const handleMaxChange = (value: string) => {
    const newValue = value.replace(/[^0-9]+/g, '');
    if (+newValue > min && +newValue <= limit) {
      setMax(+newValue);
    }
  };

  return (
    <>
      <aside className={'filtersidebar ' + (mobileAside ? '' : 'hide')}>
        <h3>Price</h3>
        <section className="filtersidebar_inputprice_container">
          <InputText
            onChange={handleMinChange}
            value={min}
            label="lowest"
            id="price_input"
          />
          <span>up to</span>
          <InputText
            onChange={handleMaxChange}
            value={max}
            label="highest"
            id="price_input"
          />
        </section>
        <RangeBar
          setMax={setMax}
          setMin={setMin}
          max={max}
          min={min}
          limit={limit}
        />

        <h3>Category</h3>
        <ul className="filtersidebar_categorylist">
          {categoryData?.map(category => {
            return (
              <li key={category.id}>
                <Checkbox
                  checked={filteredCategory.includes(category.id.toString())}
                  onClick={() => updateCategoryFilter(category.id.toString())}
                  label={category.name}
                  id={category.id}
                />
              </li>
            );
          })}
        </ul>
        <div onClick={closeAside} data-testid={'filtersidebar_closebutton'}>
          <FontAwesomeIcon
            className="filtersidebar_closebutton"
            icon={faTimes}
          />
        </div>
      </aside>
    </>
  );
}
