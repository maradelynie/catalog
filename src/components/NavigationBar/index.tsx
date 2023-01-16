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
  setPage: (page: number) => void;
  lastPage?: number;
};

export default function NavigationBar({
  page,
  setPage,
  lastPage
}: NavigationBarProps) {
  //as the pages number are hardcoded on backend and I dont have a api data of the total amount it need to be hardcoded here

  return (
    <div className="navigationbar_container">
      {page > 1 ? (
        <IconButton
          onClick={() => setPage(page - 1)}
          type="neutral"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
        />
      ) : (
        <></>
      )}
      {page > 3 ? <h5>...</h5> : <></>}
      {page - 2 > 0 ? (
        <IconButton
          onClick={() => setPage(page - 2)}
          type="neutral"
          icon={<h4>{page - 2}</h4>}
        />
      ) : (
        <></>
      )}
      {page - 1 > 0 ? (
        <IconButton
          onClick={() => setPage(page - 1)}
          type="neutral"
          icon={<h4>{page - 1}</h4>}
        />
      ) : (
        <></>
      )}
      {page > 0 ? (
        <IconButton onClick={() => setPage(page)} icon={<h4>{page}</h4>} />
      ) : (
        <></>
      )}
      {page + 1 <= (lastPage || 10) ? (
        <IconButton
          onClick={() => setPage(page + 1)}
          type="neutral"
          icon={<h4>{page + 1}</h4>}
        />
      ) : (
        <></>
      )}
      {page + 2 <= (lastPage || 10) ? (
        <IconButton
          onClick={() => setPage(page + 2)}
          type="neutral"
          icon={<h4>{page + 2}</h4>}
        />
      ) : (
        <></>
      )}
      {page + 2 <= (lastPage || 10) ? <h5>...</h5> : <></>}
      {page < (lastPage || 10) ? (
        <IconButton
          onClick={() => setPage(page + 1)}
          type="neutral"
          icon={<FontAwesomeIcon icon={faChevronRight} />}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
