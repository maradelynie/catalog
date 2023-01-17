import React, { ReactNode } from 'react';
import styled from 'styled-components';

type IconButtonProps = {
  icon: ReactNode;
  type?: 'danger' | 'neutral';
  size?: 'lg';
  disabled?: boolean;
  // eslint-disable-next-line
  onClick: (event?: any) => void;
  className?: string;
};

type IconButtonContainer = {
  sizeIcon?: 'lg';
  styleType?: 'danger' | 'neutral';
};

const IconButtonContainer = styled.button<IconButtonContainer>`
  background-color: ${props =>
    props.styleType === 'danger'
      ? 'var(--red)'
      : props.styleType === 'neutral'
      ? 'var(--midgrey)'
      : 'var(--lightblue)'};
  color: ${props => (props.styleType === 'neutral' ? 'unset' : 'white')};
  border: none;
  border-radius: 2rem;
  height: ${props => (props.sizeIcon === 'lg' ? '2.5rem' : '2rem')};
  min-width: ${props => (props.sizeIcon === 'lg' ? '2.5rem' : '2rem')};
  cursor: pointer;
  outline: ${props =>
    props.styleType === 'neutral' ? '0.4rem solid white' : ''};
  transition-duration: 0.2s;

  &:disabled {
    pointer-events: none;
  }
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
    background-color: ${props =>
      props.styleType === 'danger' ? 'var(--lightgrey)' : ''};
  }
`;

export default function IconButton({
  icon,
  type,
  size,
  disabled,
  onClick,
  className
}: IconButtonProps) {
  return (
    <IconButtonContainer
      sizeIcon={size}
      styleType={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </IconButtonContainer>
  );
}
