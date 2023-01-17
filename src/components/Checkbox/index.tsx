import React from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  label: string;
  id: number | string;
  onClick: () => void;
  checked: boolean;
};

const CheckboxContainer = styled.div`
  display: block;
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    cursor: pointer;
    left: 0;
    margin: 0;
    opacity: 0;
  }
  label {
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1rem;
    width: 1rem;
    background-color: white;
    pointer-events: none;
    border-radius: 0.2rem;
  }

  &:hover input ~ .checkmark {
    background-color: var(--midgrey);
  }

  input:checked ~ .checkmark {
    background-color: var(--lightblue);
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 0.35rem;
    top: 0.1rem;
    width: 0.2rem;
    height: 0.45rem;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default function Checkbox({
  label,
  id,
  onClick,
  checked
}: CheckboxProps) {
  return (
    <CheckboxContainer>
      <input
        onChange={onClick}
        checked={checked}
        type="checkbox"
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
        value={id}
      />{' '}
      <label htmlFor={id + '_' + label}>{label}</label>
      <span className="checkmark" data-testid={id + '_span'}></span>
    </CheckboxContainer>
  );
}
