import React, { ReactNode } from 'react';

import './style.css';

type optionType = {
  id: number | string;
  label: string;
  value: string;
};

type inputSelectProps = {
  label: string;
  id: number | string;
  size: 'sm' | 'md' | 'lg';
  style?: 'dark';
  icon?: ReactNode;
  options: optionType[] | [];
};

export default function InputSelect({
  label,
  id,
  size,
  style,
  icon,
  options
}: inputSelectProps) {
  const inputStyle = (icon ? 'icon ' : '') + size + ' ' + style;
  return (
    <div className="inputSelect_container ">
      {icon ? <div className="inputSelect_icon">{icon}</div> : <></>}
      {/* <label htmlFor={id + '_' + label}>{label}</label> */}
      <select
        className={'inputSelect ' + inputStyle}
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
        placeholder={label}
      >
        <option value="" disabled selected>
          {label}
        </option>
        {options.map(option => {
          return (
            <option key={id} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
