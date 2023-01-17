import React, { ReactNode } from 'react';
import styled from 'styled-components';

type inputTextProps = {
  label: string;
  id: number | string;
  style?: 'dark';
  icon?: ReactNode;
  value?: number | string;
  onChange: (value: string) => void;
};

type InputTextElProps = {
  styleType?: 'dark';
  icon: boolean;
};

const InputTextContainer = styled.div`
  position: relative;
  width: 100%;

  label {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .inputText_icon {
    color: var(--lightblue);
    position: absolute;
    left: 1rem;
    top: 0.5rem;
    pointer-events: none;
  }
`;

const InputTextEl = styled.input<InputTextElProps>`
  width: 100%;
  border: none;
  padding: 0.5rem 1rem;
  line-height: 0.7rem;
  border-radius: 1.5rem;
  color: var(--darktblue);
  outline-color: var(--darktblue);
  outline: 0.4rem solid white;

  &::placeholder {
    color: var(--lightblue);
  }
  background-color: ${props =>
    props.styleType === 'dark' ? 'var(--lightgrey)' : ''};
  padding-left: ${props => (props.icon ? '2.3rem' : '')};
`;

export default function InputText({
  label,
  id,
  style,
  icon,
  value,
  onChange
}: inputTextProps) {
  return (
    <InputTextContainer>
      {icon ? <div className="inputText_icon">{icon}</div> : <></>}
      <label htmlFor={id + '_' + label}>{label}</label>
      <InputTextEl
        icon={icon ? true : false}
        styleType={style}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
        placeholder={label}
      />
    </InputTextContainer>
  );
}
