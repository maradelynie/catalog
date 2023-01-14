import React from 'react';

import './style.css';

type inputTextProps = {
  label: string;
  id: number | string;
  size: 'sm' | 'md' | 'lg';
};

export default function InputText({ label, id, size }: inputTextProps) {
  return (
    <div className="inputText_container">
      <label htmlFor={id + '_' + label}>{label}</label>
      <input
        className={'inputText_' + size}
        type="text"
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
        placeholder={label}
        maxLength={6}
      />
    </div>
  );
}
