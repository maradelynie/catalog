import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './style.css';

export default function Header() {
  return (
    <header className="pageheader">
      <div className="pageheader_container">
        <h1>AppName</h1>
        <nav>
          <ul>
            <li id="pageheader_hearticon" data-testid="pageheader_hearticon">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </li>
            <li id="pageheader_carticon" data-testid="pageheader_carticon">
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
