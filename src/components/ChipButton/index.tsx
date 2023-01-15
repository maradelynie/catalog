import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './style.css';

type ChipButtonProps = {
  title: string;
  id: number | string;
};

export default function ChipButton({ title, id }: ChipButtonProps) {
  return (
    <button key={id} className="productspage_filtersection">
      <span>{title}</span>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
}
