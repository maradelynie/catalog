import React, { ReactNode } from 'react';

import './style.css';

type IconButtonProps = {
  icon: ReactNode;
  type?: 'danger' | 'neutral';
  size?: 'lg';
  disabled?: boolean;
};

export default function IconButton({
  icon,
  type,
  size,
  disabled
}: IconButtonProps) {
  const buttonStyle = (type ? type : '') + ' ' + (size ? size : '');
  return (
    <button
      disabled={disabled}
      className={'iconButton_container ' + buttonStyle}
    >
      {icon}
    </button>
  );
}
