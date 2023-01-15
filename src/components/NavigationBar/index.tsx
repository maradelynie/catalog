import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconButton from '../IconButton';

import './style.css';

type NavigationBarProps = {
  page: number;
};

export default function NavigationBar({ page }: NavigationBarProps) {
  return (
    <div className="navigationbar_container">
      <IconButton
        type="neutral"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
      />
      {page - 2 > 0 ? (
        <IconButton type="neutral" icon={<h4>{page - 2}</h4>} />
      ) : (
        <></>
      )}
      {page - 1 > 0 ? (
        <IconButton type="neutral" icon={<h4>{page - 1}</h4>} />
      ) : (
        <></>
      )}
      {page > 0 ? <IconButton icon={<h4>{page}</h4>} /> : <></>}
      {page + 1 > 0 ? (
        <IconButton type="neutral" icon={<h4>{page + 1}</h4>} />
      ) : (
        <></>
      )}
      {page + 2 > 0 ? (
        <IconButton type="neutral" icon={<h4>{page + 2}</h4>} />
      ) : (
        <></>
      )}
      <h5>...</h5>
      <IconButton
        type="neutral"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
      />
    </div>
  );
}
