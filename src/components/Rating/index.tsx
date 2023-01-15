import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './style.css';

type RatingProps = {
  score: number;
  small?: boolean;
};

export default function Rating({ score, small }: RatingProps) {
  const renderStar = () => {
    return [1, 2, 3, 4, 5].map(star => {
      return score < star ? (
        <FontAwesomeIcon
          key={star + 'star'}
          className={'neutral'}
          icon={faStar}
          size={small ? 'sm' : 'lg'}
        />
      ) : (
        <FontAwesomeIcon
          key={star + 'star'}
          icon={faStar}
          size={small ? 'sm' : 'lg'}
        />
      );
    });
  };
  return (
    <div className="rating_container">
      {renderStar()}
      {!small ? <p>{score.toFixed(1)}</p> : <></>}
    </div>
  );
}
