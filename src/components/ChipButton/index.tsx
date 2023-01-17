import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

type ChipButtonProps = {
  title: string;
  id: string;
  onClick: (id: string) => void;
};

const ChipfilterContainer = styled.button`
  background-color: var(--lightgrey);
  color: var(--darkblue);
  border: none;
  height: 2rem;
  border-radius: 0.3rem;
  min-width: 2rem;
  cursor: pointer;
  margin: 0.3rem 0.5rem;
  transition-duration: 0.2s;
  outline: 0.4rem solid white;

  span {
    margin-right: 1rem;
  }
  &:hover {
    background-color: var(--red);
    color: white;
  }
  &:active {
    background-color: var(--lightgrey);
  }
`;

export default function ChipButton({ title, id, onClick }: ChipButtonProps) {
  return (
    <ChipfilterContainer onClick={() => onClick(id)}>
      <span>{title}</span>
      <FontAwesomeIcon icon={faTimes} />
    </ChipfilterContainer>
  );
}
