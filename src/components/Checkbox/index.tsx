import React from 'react';

import './style.css';

type CheckboxProps = {
  label: string;
  id: number | string;
};

export default function Checkbox({ label, id }: CheckboxProps) {
  return (
    <div className="checkbox_container">
      <input
        type="checkbox"
        name={id + '_' + label}
        id={id + '_' + label}
        data-testid={id + '_' + label}
      />{' '}
      <label htmlFor={id + '_' + label}>{label}</label>
      <span className="checkmark" data-testid={id + '_span'}></span>
    </div>
  );
}
