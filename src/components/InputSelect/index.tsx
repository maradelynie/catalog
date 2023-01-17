import React, { ReactNode } from 'react';
import styled from 'styled-components';

type optionType = {
  id: number | string;
  label: string;
  value: string;
};

type inputSelectProps = {
  label: string;
  id: number | string;
  style?: 'dark';
  icon?: ReactNode;
  options: optionType[] | [];
  // eslint-disable-next-line
  onChange: (selected: any) => void;
};

type InputSelectElProps = {
  styleType?: 'dark';
  icon: boolean;
};

const InputSelectContainer = styled.div`
  position: relative;
  width: 100%;

  .inputSelect_icon {
    color: var(--lightblue);
    position: absolute;
    left: 1rem;
    top: 0.5rem;
    pointer-events: none;
  }
  label {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`;
const InputSelectEl = styled.select<InputSelectElProps>`
  width: 100%;
  border: none;
  padding: 0.5rem 1rem 0.5rem 0;
  line-height: 0.7rem;
  border-radius: 1.5rem;
  color: var(--darktblue);
  outline-color: var(--darktblue);
  outline: 0.4rem solid white;

  background-color: ${props =>
    props.styleType === 'dark' ? 'var(--lightgrey)' : ''};
  padding-left: ${props => (props.icon ? '2.3rem' : '')};

  &::placeholder {
    color: var(--lightblue);
  }
`;

export default function InputSelect({
  label,
  id,
  style,
  icon,
  onChange,
  options
}: inputSelectProps) {
  return (
    <InputSelectContainer>
      {icon ? <div className="inputSelect_icon">{icon}</div> : <></>}
      <InputSelectEl
        icon={icon ? true : false}
        styleType={style}
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
        placeholder={label}
        defaultValue={''}
        onChange={e =>
          onChange(
            options.find(option => option.id.toString() === e.target.value)
          )
        }
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, index) => {
          return (
            <option key={id + '_' + index} value={option.id}>
              {option.label}
            </option>
          );
        })}
      </InputSelectEl>
    </InputSelectContainer>
  );
}
