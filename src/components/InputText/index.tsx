import React, { ReactNode } from 'react';

import './style.css';

type inputTextProps = {
  label: string;
  id: number | string;
  size: 'sm' | 'md' | 'lg';
  style?: 'dark';
  icon?: ReactNode;
};

export default function InputText({
  label,
  id,
  size,
  style,
  icon
}: inputTextProps) {
  const inputStyle = (icon ? 'icon ' : '') + size + ' ' + style;
  return (
    <div className={'inputText_container ' + size}>
      {icon ? <div className="inputText_icon">{icon}</div> : <></>}
      <label htmlFor={id + '_' + label}>{label}</label>
      <input
        className={'inputText ' + inputStyle}
        type="text"
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
        placeholder={label}
        maxLength={size === 'sm' ? 6 : undefined}
      />
    </div>
  );
}
