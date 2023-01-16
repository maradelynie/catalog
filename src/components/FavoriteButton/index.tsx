import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useState } from 'react';

import './style.css';

type FavoriteButtonProps = {
  active: boolean;
  // eslint-disable-next-line
  onClick: (event?: any) => void;
};

export default function FavoriteButton({
  active,
  onClick
}: FavoriteButtonProps) {
  return (
    <button onClick={onClick} className={'favoritebutton'}>
      <>
        <FontAwesomeIcon
          className={active ? 'fill' : ''}
          icon={faHeart}
          size="lg"
        />
      </>
    </button>
  );
}
