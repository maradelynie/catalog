import React, { ReactNode } from 'react';

import './style.css';

type IconButtonProps = {
  icon: ReactNode;
  type?: 'danger' | 'neutral';
  size?: 'lg';
  disabled?: boolean;
  onClick: (event?: any) => void;
};

export default function IconButton({
  icon,
  type,
  size,
  disabled,
  onClick
}: IconButtonProps) {
  const buttonStyle = (type ? type : '') + ' ' + (size ? size : '');
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={'iconButton_container ' + buttonStyle}
    >
      {icon}
    </button>
  );
}
