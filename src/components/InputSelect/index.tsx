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
  style?: 'dark';
  icon?: ReactNode;
  options: optionType[] | [];
};

export default function InputSelect({
  label,
  id,
  style,
  icon,
  options
}: inputSelectProps) {
  const inputStyle = (icon ? 'icon ' : '') + ' ' + style;
  return (
    <div className={'inputSelect_container ' + inputStyle}>
      {icon ? <div className="inputSelect_icon">{icon}</div> : <></>}
      <select
        className={'inputSelect ' + inputStyle}
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
        placeholder={label}
        defaultValue={''}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, index) => {
          return (
            <option key={id + '_' + index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
