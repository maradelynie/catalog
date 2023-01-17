import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

type RatingProps = {
  score: number;
  small?: boolean;
};

const RatingContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;

  svg {
    color: gold;
  }
  svg.neutral {
    color: var(--midgrey);
  }
  p {
    margin: 0 1rem;
  }
`;

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
    <RatingContainer className="rating_container">
      {renderStar()}
      {!small ? <p>{score.toFixed(1)}</p> : <></>}
    </RatingContainer>
  );
}
