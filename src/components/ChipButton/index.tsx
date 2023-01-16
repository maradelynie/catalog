import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './style.css';

type ChipButtonProps = {
  title: string;
  id: string;
  onClick: (id: string) => void;
};

export default function ChipButton({ title, id, onClick }: ChipButtonProps) {
  return (
    <button onClick={() => onClick(id)} key={id}>
      <span>{title}</span>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
}
