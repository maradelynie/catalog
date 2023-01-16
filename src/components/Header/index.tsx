import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="pageheader">
      <div className="pageheader_container">
        <h1>AppName</h1>
        <nav>
          <ul>
            <li
              onClick={() => navigate('/favorites')}
              id="pageheader_hearticon"
              data-testid="pageheader_hearticon"
            >
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </li>
            <li
              onClick={() => navigate('/')}
              id="pageheader_carticon"
              data-testid="pageheader_carticon"
            >
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
