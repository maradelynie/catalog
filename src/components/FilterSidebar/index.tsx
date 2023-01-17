import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { CategoriesI } from '../../models/interfaces';
import Checkbox from '../Checkbox';
import InputText from '../InputText';
import RangeBar from '../ProgressBar';
import { FiltersidebarContainer, FiltersidebarInputContainer } from './style';

type FilterSidebarProps = {
  categoryData: CategoriesI[];
  filteredCategory: CategoriesI | null;
  updateCategoryFilter: (category: CategoriesI) => void;
  closeAside: () => void;
  mobileAside: boolean;
  maxState: { max: number; setMax: (max: number) => void };
  minState: { min: number; setMin: (min: number) => void };
};

export default function FilterSidebar({
  categoryData,
  filteredCategory,
  updateCategoryFilter,
  closeAside,
  mobileAside,
  maxState,
  minState
}: FilterSidebarProps) {
  const { max, setMax } = maxState;
  const { min, setMin } = minState;

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
      <FiltersidebarContainer hide={mobileAside}>
        <h3>Price</h3>
        <FiltersidebarInputContainer>
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
        </FiltersidebarInputContainer>
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
                  checked={filteredCategory?.id === category.id}
                  onClick={() => updateCategoryFilter(category)}
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
      </FiltersidebarContainer>
    </>
  );
}
