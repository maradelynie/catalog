import React from 'react';

import './style.css';

type CheckboxProps = {
  label: string;
  id: number | string;
  onClick: () => void;
  checked: boolean;
};

export default function Checkbox({
  label,
  id,
  onClick,
  checked
}: CheckboxProps) {
  return (
    <div className="checkbox_container">
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
    </div>
  );
}
