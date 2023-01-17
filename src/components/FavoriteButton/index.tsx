import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const FavoritebuttonContainer = styled.button`
  background-color: transparent;
  padding: 0;
  font-size: larger;
  color: var(--midgrey);
  margin: auto;
  &:hover {
    color: var(--red);
  }
  .fill {
    color: var(--red);
  }

  @media screen and (max-width: 800px) {
    & {
      top: 5rem;
    }
  }
`;

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
    <FavoritebuttonContainer onClick={onClick}>
      <FontAwesomeIcon
        className={active ? 'fill' : ''}
        icon={faHeart}
        size="lg"
      />
    </FavoritebuttonContainer>
  );
}
