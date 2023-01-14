import React, { ReactNode } from 'react';

import './style.css';

type IconButtonProps = {
  icon: ReactNode;
  type?: 'danger';
  size?: 'lg';
};

export default function IconButton({ icon, type, size }: IconButtonProps) {
  const buttonStyle = (type ? type : '') + ' ' + (size ? size : '');
  return (
    <button className={'iconButton_container ' + buttonStyle}>{icon}</button>
  );
}
