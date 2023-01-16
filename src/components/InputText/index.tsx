import React, { ReactNode, useState } from 'react';

import './style.css';

type inputTextProps = {
  label: string;
  id: number | string;
  style?: 'dark';
  icon?: ReactNode;
  value?: number | string;
  onChange: (value: string) => void;
};

export default function InputText({
  label,
  id,
  style,
  icon,
  value,
  onChange
}: inputTextProps) {
  const inputStyle = (icon ? 'icon ' : '') + ' ' + style;

  return (
    <div className={'inputText_container'}>
      {icon ? <div className="inputText_icon">{icon}</div> : <></>}
      <label htmlFor={id + '_' + label}>{label}</label>
      <input
        className={'inputText ' + inputStyle}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
        placeholder={label}
      />
    </div>
  );
}
